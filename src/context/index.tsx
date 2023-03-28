import type { Dispatch, ReactNode } from 'react'
import { createContext, useContext, useReducer, useState } from 'react'
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
MediasContext.displayName = 'MediasContext'

// the movie or tv you want to put in list
interface ListState {
  list: Media[]
  updateList: Dispatch<LIST_ACTION_TYPE>
}
export const ListContext = createContext<ListState>(null as unknown as ListState)
export const useList = () => useContext(ListContext)
ListContext.displayName = 'ListContext'

// loading state
type Status = 'loading' | 'error' | 'success' | 'ready'
interface LoadState {
  loadStatus: Status
  updateLoadStatus: (status: Status) => void
}
export const LoadContext = createContext<LoadState>(null as unknown as LoadState)
export const useLoad = () => useContext(LoadContext)
LoadContext.displayName = 'LoadContext'

export const AppProvirder = ({ children }: { children: ReactNode }) => {
  const [medias, updateMedias] = useReducer(mediasReducer, [])
  const [list, updateList] = useReducer(listReducer, [])
  const [loadStatus, setLoadStatus] = useState<Status>('ready')
  const updateLoadStatus = (status: Status) => setLoadStatus(status)
  return (
    <MediasContext.Provider value={{ medias, updateMedias }}>
      <ListContext.Provider value={{ list, updateList }}>
        <LoadContext.Provider value={{ loadStatus, updateLoadStatus }}>
          {children}
        </LoadContext.Provider>
      </ListContext.Provider>
    </MediasContext.Provider>
  )
}
