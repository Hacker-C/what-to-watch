import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import React from 'react'
import type { RouteType } from '@/routes'
import { routes } from '@/routes'
import { AppProvirder } from '@/context'

interface Props {
  route: RouteType
}

const DomTitle: React.FC<Props> = (props: Props) => {
  const { route } = props
  if (route?.meta?.title)
    document.title = `${route?.meta?.title} | What to Watch`
  return <route.element />
}

export default function App() {
  return (
    <AppProvirder>
      <Router>
        <Routes>
          {
            routes.map((route) => {
              return (
                <Route
                  path={route.path}
                  key={route.path}
                  element={<DomTitle route={route}/>}
                />
              )
            })
          }
        </Routes>
      </Router>
    </AppProvirder>
  )
}
