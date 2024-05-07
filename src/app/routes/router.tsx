import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { CommonLayout } from '@/app/routes/layouts'
import { PrivateLayout } from '@/app/routes/layouts/private-layout'
import { PublicLayout } from '@/app/routes/layouts/public-layout'
import { privateRoutes } from '@/app/routes/private-routes'
import { publicRoutes } from '@/app/routes/public-routes'

const router = createBrowserRouter([
  {
    children: [
      { children: privateRoutes, element: <PrivateLayout /> },
      { children: publicRoutes, element: <PublicLayout /> },
    ],
    element: <CommonLayout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
