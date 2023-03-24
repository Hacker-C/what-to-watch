import type { Dispatch, ReactNode } from 'react'
import { createContext, useContext, useReducer } from 'react'
import type { ACTION_TYPE } from './reducer'
import { ListReducer, initMedias } from './reducer'
import type { Media } from '@/interfaces'

export const AppContext = createContext<{ medias: Media[]; update: Dispatch<ACTION_TYPE> } | null >(null)

export const useMedias = () => useContext(AppContext)

export const AppProvirder = ({ children }: { children: ReactNode }) => {
  const [medias, update] = useReducer(ListReducer, initMedias)
  return (
    <AppContext.Provider value={{ medias, update }}>
      {children}
    </AppContext.Provider>
  )
}
