import type { FormEvent } from 'react'
import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { MForm } from '@/components/home/styled-components/MForm'
import { MButton } from '@/components/common/MButton'
import type { Media, TV } from '@/interfaces'
import { searchMovie, searchTV, searchTvSeasons } from '@/api'
import { useLoad, useMedias } from '@/context'
import useLocalStorage from '@/hooks/useLocalStorage'
import { getImage } from '@/utils'

function SearchPanel() {
  const { updateMedias } = useMedias()
  const { updateLoadStatus } = useLoad()
  const [keyword, setKeyword] = useLocalStorage('keyword', '')

  const cachedHandleSubmit = useCallback(handleSubmit, [keyword])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // TIP: start load data
    updateLoadStatus('loading')

    // clear medias state
    updateMedias({
      type: 'clear'
    })

    try {
      // FEAT: get tvs
      const tvs = await searchTV({ query: keyword })
      tvs.forEach(tv => tv.media_type = 'tv')

      // FEAT: get every season of tvs
      const promises = tvs.map(
        ({ id, name, overview, original_name }) => searchTvSeasons(id, name, overview, original_name)
      )
      const seasonsResults = await Promise.all(promises)
      tvs.length = 0
      seasonsResults.forEach((seasons) => {
        tvs.push(...(seasons as unknown as TV[]))
      })

      // FEAT get movies
      const movies = await searchMovie({ query: keyword })
      movies.forEach(movie => movie.media_type = 'movie')
      const results = [...tvs, ...movies]
      // TIP: success load
      updateLoadStatus('success')
      results.forEach((m) => {
        const media = {} as Media
        if (m.media_type === 'tv') {
          media.name = m.name
          media.type = m.media_type
          media.originalName = m.original_name
          media.date = m.first_air_date
          media.episodeCount = m.episode_count
        } else {
          media.name = m.title
          media.type = m.media_type
          media.originalName = m.original_title
          media.date = m.release_date
        }
        media.selected = false
        media.id = m.id
        media.overview = m?.overview?.trim()
        media.poster = getImage(m.poster_path)
        updateMedias({
          type: 'add',
          payload: media
        })
      })
    } catch (error) {
      updateLoadStatus('error')
    }
  }

  return (
  <>
    <MForm onSubmit={cachedHandleSubmit}>
      <MForm.MInput
        type={'text'}
        placeholder={'搜索电影和电视'}
        value={keyword}
        onChange={e => setKeyword(e.currentTarget.value)}
        clearable
      />
      <MButton htmlType={'submit'}>搜 索</MButton>
      <Link to={'/create'}>
        <MButton htmlType={'button'}>
          生 成
        </MButton>
      </Link>
    </MForm>
  </>
  )
}

export default SearchPanel
