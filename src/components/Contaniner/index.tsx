import type { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      m='y-5% lt-sm:x-2 lt-lg:x-10 lt-xl:x-20 xl:x-30'
      className='min-w-[300px] font-[Inter,sans-serif]'
    >
      {children}
    </div>
  )
}

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <h1
      text='primary lt-sm:2xl sm:3xl lt-sm:center sm:left'
      className='font-bold my-5'
    >
      {children}
    </h1>
  )
}

Container.Header = Header
