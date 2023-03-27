import type React from 'react'
import HomePage from '@/pages/home-page'
import ErrorPage from '@/pages/error-page'
import CreatePage from '@/pages/create-page'

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
    element: HomePage,
    meta: {
      title: 'Search'
    }
  },
  {
    path: '/create',
    element: CreatePage,
    meta: {
      title: 'Create'
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

