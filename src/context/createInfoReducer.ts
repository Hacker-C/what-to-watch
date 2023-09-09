import type { ICreateInfo } from '@/interfaces'

export const createInfoReducer = (info: ICreateInfo, action: INFO_ACTION_TYPE) => {
  const { type } = action
  if (type === 'reset-info') {
    return { title: '', desc: '', author: '' }
  }
  const { payload } = action
  const actions: Map<string, () => ICreateInfo> = new Map()
    .set('update-info', () => {
      return { ...info, ...payload }
    })
  return (actions?.get(type) || (() => info))()
}

export type INFO_ACTION_TYPE =
  | { type: 'update-info'; payload: Partial<ICreateInfo> }
  | { type: 'reset-info' }
