import type { FormEvent } from 'react'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { MButton, MForm } from '@/components/styles'
import type { Media, TV } from '@/interfaces'
import { searchMovie, searchTV, searchTvSeasons } from '@/api'
import { useMedias } from '@/context'

function SearchPanel() {
  const { update } = useMedias()!
  const [keyword, setKeyword] = useState('三体')

  const cachedHandleSubmit = useCallback(handleSubmit, [keyword])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // 清空结果
    update({
      type: 'clear'
    })

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
    results.forEach((m) => {
      const media = {} as Media
      if (m.media_type === 'tv') {
        media.name = m.name
        media.type = m.media_type
        media.originalName = m.original_name
        media.date = m.first_air_date
      } else {
        media.name = m.title
        media.type = m.media_type
        media.originalName = m.original_title
        media.date = m.release_date
      }
      media.selected = false
      media.poster = m.poster_path
      media.id = m.id
      media.overview = m?.overview?.trim()
      update({
        type: 'add',
        payload: media
      })
    })
  }

  return (
    <>
      <MForm onSubmit={cachedHandleSubmit}>
        <MForm.MInput
          type="text"
          placeholder='请输入电影或电视名'
          value={keyword}
          onChange={e => setKeyword(e.currentTarget.value)}
        />
        <MButton type='submit'>搜 索</MButton>
        <Link to={'/create'}>
          <MButton type='button'>
            生 成
          </MButton>
        </Link>
      </MForm>
    </>
  )
}

export default SearchPanel
