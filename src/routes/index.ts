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
      title: 'Search'
    }
  },
  {
    path: '/create',
    element: Create,
    meta: {
      title: 'Create'
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

