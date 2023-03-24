import { http } from '../utils/http'

import type { Movie, Season, TV } from '@/interfaces'

const func = <T extends { name?: string; title?: string }>(results: T[], keyword: string) => results.filter(
  (m: T) => [m?.name || '', m?.title || ''].some(
    item => item.toUpperCase().includes(keyword.toUpperCase())
  )
)

// search movie only
export const searchMovie = async (paramsObj: { query: string }): Promise<Movie[]> => {
  return http('search/movie', paramsObj)
    .then(data => func<Movie>(data.results, paramsObj.query))
}

// search tv only
export const searchTV = async (paramsObj: { query: string }): Promise<TV[]> => {
  return http('search/tv', paramsObj)
    .then(data => func<TV>(data.results, paramsObj.query))
}

// search seasons of the tv by id
export const searchTvSeasons = async (id: number, name: string, overview: string, original_name: string): Promise<Season[]> => {
  return http(`tv/${id}`).then(
    data => (data.seasons as Season[]).map(
      (s: Season) => ({
        ...s,
        original_name,
        overview: s.overview || overview,
        media_type: 'tv',
        first_air_date: s.air_date,
        name: `${name?.[0] === s.name[0] ? '' : name} ${s.name}`

      }) as Season
    ).sort((tv1, tv2) => (tv1?.first_air_date || '2025').localeCompare(tv2?.first_air_date || '2025')))
}
