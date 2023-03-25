import type { Media } from '@/interfaces'

export const listReducer = (list: Media[], action: LIST_ACTION_TYPE): Media[] => {
  const { type, payload } = action
  const selectFn = (m: Media) => m.id === payload!.id ? { ...m, selected: !m.selected } : m
  return new Map()
    .set('add', () => {
      return list.some(m => m.id === payload!.id) ? list : [...list, payload]
    })
    .set('select', () => {
      return list.map(selectFn)
    })
    .set('remove', () => {
      return list.map(selectFn)
    })
    .set('clear', () => [])
    .get(type)()
}

export type LIST_ACTION_TYPE =
  | { type: 'add'; payload: Media }
  | { type: 'remove'; payload?: Media }
  | { type: 'clear'; payload?: Media }
