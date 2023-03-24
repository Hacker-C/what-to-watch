export interface Movie {
  id: number
  title: string
  overview: string
  media_type: 'movie'
  poster_path: string
  original_title: string
  release_date: string
}

export interface TV {
  id: number
  name: string
  overview: string
  media_type: 'tv'
  poster_path: string
  original_name: string
  first_air_date: string
}

export interface Season {
  id: number
  name: string
  original_name: string
  overview: string
  media_type: 'tv'
  first_air_date: string
  air_date: string
  poster_path: string
  episode_count: number
  season_number: number
}

export interface Media {
  id: number
  name: string
  date: string
  overview: string
  type: 'tv' | 'movie'
  poster: string
  originalName?: string
  selected: boolean
}
