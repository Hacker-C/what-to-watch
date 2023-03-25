import type { Dispatch, ReactNode } from 'react'
import { createContext, useContext, useReducer } from 'react'
import type { MEDIAS_ACTION_TYPE } from './mediasReducer'
import { mediasReducer } from './mediasReducer'
import type { LIST_ACTION_TYPE } from './listReducer'
import { listReducer } from './listReducer'
import type { Media } from '@/interfaces'

// search result of home page medias
interface MediasState {
  medias: Media[]
  updateMedias: Dispatch<MEDIAS_ACTION_TYPE>
}
export const MediasContext = createContext<MediasState>(null as unknown as MediasState)
export const useMedias = () => useContext(MediasContext)

// the movie or tv you want to put in list
interface ListState {
  list: Media[]
  updateList: Dispatch<LIST_ACTION_TYPE>
}
export const ListContext = createContext<ListState> (null as unknown as ListState)
export const useList = () => useContext(ListContext)

export const AppProvirder = ({ children }: { children: ReactNode }) => {
  const [medias, updateMedias] = useReducer(mediasReducer, [])
  const [list, updateList] = useReducer(listReducer, [])
  return (
    <MediasContext.Provider value={{ medias, updateMedias }}>
      <ListContext.Provider value={{ list, updateList }}>
        {children}
      </ListContext.Provider>
    </MediasContext.Provider>
  )
}
