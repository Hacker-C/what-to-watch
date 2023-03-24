import type { Media } from '@/interfaces'

export const initMedias: Media[] = []

export const ListReducer = (medias: Media[], action: ACTION_TYPE) => {
  const { type, payload } = action
  return new Map()
    .set('add', medias.some(m => m.id === payload?.id) ? medias : [...medias, payload])
    .set('select', medias.map(m => m.id === (payload as Media)?.id ? { ...m, selected: !m.selected } : m))
    .set('remove', medias.map(m => m.id === (payload as Media)?.id ? { ...m, selected: !m.selected } : m))
    .set('clear', [])
    .get(type)
}

export type ACTION_TYPE =
  | { type: 'add'; payload: Media }
  | { type: 'select'; payload: Media }
  | { type: 'remove'; payload?: Media }
  | { type: 'clear'; payload?: Media }
