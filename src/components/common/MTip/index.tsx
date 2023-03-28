import { Icon } from '@iconify/react'
import type { ReactNode } from 'react'

interface MTipProps {
  type?: 'success' | 'info' | 'warn' | 'danger'
  children: ReactNode
}

type RemoveOptional<T> = {
  [Key in keyof T]-?: T[Key]
}

const tipMap = (type: RemoveOptional<MTipProps>['type']) => {
  return new Map([
    ['success', { color: '#67c23a', icon: 'clarity:success-standard-line' }],
    ['info', { color: '#909399', icon: 'ic:outline-tips-and-updates' }],
    ['warn', { color: '#e6a23c', icon: 'ic:outline-info' }],
    ['danger', { color: '#f56c6c', icon: 'jam:triangle-danger' }]
  ]).get(type)!
}

function MTip({ children, type = 'info' }: MTipProps) {
  const { color, icon } = tipMap(type!)
  return (
    <div className='text-base font-normal' style={{ color }}>
      <Icon icon={icon} width='18' className='inline mx-1 mb-0.6'></Icon>
      <span>{children}</span>
    </div>
  )
}

export default MTip
