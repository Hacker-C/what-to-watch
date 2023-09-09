import type { Dispatch, ReactNode } from 'react'
import { createContext, useContext, useReducer, useState } from 'react'
import type { MEDIAS_ACTION_TYPE } from './mediasReducer'
import { mediasReducer } from './mediasReducer'
import type { LIST_ACTION_TYPE } from './listReducer'
import { listReducer } from './listReducer'
import type { INFO_ACTION_TYPE } from './createInfoReducer'
import { createInfoReducer } from './createInfoReducer'
import type { ICreateInfo, Media } from '@/interfaces'

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

// info of the movie or tv you want to put in list
interface ICreateInfoState {
  info: ICreateInfo
  update: Dispatch<INFO_ACTION_TYPE>
}
export const CreateInfoContext = createContext<ICreateInfoState>(null as unknown as ICreateInfoState)
export const useCreateInfo = () => useContext(CreateInfoContext)
CreateInfoContext.displayName = 'CreateInfoContext'

export const AppProvirder = ({ children }: { children: ReactNode }) => {
  const [medias, updateMedias] = useReducer(mediasReducer, [])
  const [list, updateList] = useReducer(listReducer, [])
  const [loadStatus, setLoadStatus] = useState<Status>('ready')
  const [info, update] = useReducer(createInfoReducer, {} as ICreateInfo)
  const updateLoadStatus = (status: Status) => setLoadStatus(status)
  return (
    <MediasContext.Provider value={{ medias, updateMedias }}>
      <ListContext.Provider value={{ list, updateList }}>
        <LoadContext.Provider value={{ loadStatus, updateLoadStatus }}>
          <CreateInfoContext.Provider value={{ info, update }}>
            {children}
          </CreateInfoContext.Provider>
        </LoadContext.Provider>
      </ListContext.Provider>
    </MediasContext.Provider>
  )
}
