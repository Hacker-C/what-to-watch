import type { Media } from '@/interfaces'

export const mediasReducer = (medias: Media[], action: MEDIAS_ACTION_TYPE): Media[] => {
  const { type, payload } = action
  const selectFn = (m: Media) => m.id === payload!.id ? { ...m, selected: !m.selected } : m
  return new Map()
    .set('add', () => {
      return medias.some(m => m.id === payload!.id) ? medias : [...medias, payload]
    })
    .set('select', () => {
      return medias.map(selectFn)
    })
    .set('remove', () => {
      return medias.map(selectFn)
    })
    .set('clear', () => [])
    .get(type)()
}

export type MEDIAS_ACTION_TYPE =
  | { type: 'add'; payload: Media }
  | { type: 'select'; payload: Media }
  | { type: 'remove'; payload?: Media }
  | { type: 'clear'; payload?: Media }
