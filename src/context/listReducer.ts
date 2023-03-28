import type { Media } from '@/interfaces'

export const listReducer = (list: Media[], action: LIST_ACTION_TYPE) => {
  const { type, payload } = action
  const actions: Map<string, () => Media[]> = new Map()
    .set('add', () => {
      return list.some(m => m.id === (payload as Media).id) ? list : [...list, payload]
    })
    .set('remove', () => {
      return list.filter(m => m.id !== payload)
    })
    .set('clear', () => [])
  return (actions?.get(type) || (() => list))()
}

export type LIST_ACTION_TYPE =
  | { type: 'add'; payload: Media }
  | { type: 'remove'; payload: number }
  | { type: 'clear'; payload?: null }
