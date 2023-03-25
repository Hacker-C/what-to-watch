import type React from 'react'
import Home from '@/pages/home-page'
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
    element: Home,
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

