import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PrivateLayout } from '@/app/routes/layouts/private-layout'
import { PublicLayout } from '@/app/routes/layouts/public-layout'
import { privateRoutes } from '@/app/routes/private-routes'
import { publicRoutes } from '@/app/routes/public-routes'
import { Button } from '@/shared/ui'

const router = createBrowserRouter([
  {
    children: [
      { children: privateRoutes, element: <PrivateLayout /> },
      { children: publicRoutes, element: <PublicLayout /> },
    ],
    element: <Button variant={'primary'}>Primary Button</Button>,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
