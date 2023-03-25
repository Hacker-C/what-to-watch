import type { FormEvent } from 'react'
import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { MForm } from '@/components/home/styles/MForm'
import { MButton } from '@/components/common/MButton'
import type { Media, TV } from '@/interfaces'
import { searchMovie, searchTV, searchTvSeasons } from '@/api'
import { useMedias } from '@/context'
import useLocalStorage from '@/hooks/useLocalStorage'
import { getBase64Image, getImage } from '@/utils'

function SearchPanel() {
  const { updateMedias } = useMedias()
  const [keyword, setKeyword] = useLocalStorage('keyword', '')

  const cachedHandleSubmit = useCallback(handleSubmit, [keyword])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // 清空结果
    updateMedias({
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
    results.forEach(async (m) => {
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
      media.poster = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'

      // !#####################
      try {
        const newPoster = await new Promise((resolve, reject) => {
          const image = new Image()
          image.crossOrigin = 'anonymous'
          image.addEventListener('load', () => {
            resolve(getBase64Image(image))
          })
          image.addEventListener('error', (e) => {
            reject(e)
          })
          image.src = `${getImage(m.poster_path)}?v=${Math.random()}` // 此处自己替换本地图片的地址
        })
        media.poster = newPoster as string
        // !#####################
        updateMedias({
          type: 'add',
          payload: media
        })
      } catch (error) {
        console.warn('errrrrrrrrrr')
      }
    })
  }

  return (
    <>
      <MForm onSubmit={cachedHandleSubmit}>
        <MForm.MInput
          type={'text'}
          placeholder={'请输入电影或电视名'}
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
