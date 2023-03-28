import type { Media } from '@/interfaces'

export const mediasReducer = (medias: Media[], action: MEDIAS_ACTION_TYPE) => {
  const { type, payload } = action
  const selectFn = (m: Media) => m.id === (payload as number) ? { ...m, selected: !m.selected } : m
  const actions: Map<string, () => Media[]> = new Map()
    .set('add', () => {
      return medias.some(m => m.id === (payload as Media).id) ? medias : [...medias, payload]
    })
    .set('select', () => {
      return medias.map(selectFn)
    })
    .set('deselected', () => {
      return medias.map(selectFn)
    })
    .set('deselected-all', () => {
      return medias.map(m => ({ ...m, selected: false }))
    })
    .set('clear', () => [])
  return (actions?.get(type) || (() => medias))()
}

export type MEDIAS_ACTION_TYPE =
  | { type: 'add'; payload: Media }
  | { type: 'select'; payload: number }
  | { type: 'deselected'; payload: number }
  | { type: 'deselected-all'; payload?: null }
  | { type: 'clear'; payload?: null }
