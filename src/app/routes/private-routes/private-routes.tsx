import { RouteObject } from 'react-router-dom'

import { ProfilePage } from '@/pages'

export const privateRoutes: RouteObject[] = [
  {
    element: <div>DECK</div>,
    path: '/',
  },
  {
    element: <ProfilePage />,
    path: '/profile',
  },
]
