import { RouteObject } from 'react-router-dom'

import { ProfilePage } from '@/pages'
import { LearnPage } from '@/pages/learn-page/learn-page'
import { routes } from '@/shared/const'

export const privateRoutes: RouteObject[] = [
  {
    element: <div>DECK</div>,
    path: '/',
  },
  {
    element: <ProfilePage />,
    path: routes.PROFILE,
  },
  {
    element: <LearnPage />,
    path: routes.LEARN,
  },
]
