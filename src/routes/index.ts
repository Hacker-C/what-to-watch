import type React from 'react'
import Home from '@/pages/home'
import ErrorPage from '@/pages/error-page'
import Create from '@/pages/create'

export interface RouteType {
  path: string
  element: React.FC
  meta?: {
    title: string
  }
}

const routes: RouteType[] = [
  {
    path: '/',
    element: Home,
    meta: {
      title: '影视搜索'
    }
  },
  {
    path: '/create',
    element: Create,
    meta: {
      title: '列表制作'
    }
  },
  {
    path: '/',
    element: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '*',
    element: ErrorPage,
    meta: {
      title: 'Page not found'
    }
  }
]

export { routes }

