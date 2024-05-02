import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '@/app/routes'

const router = createBrowserRouter([
  { children: privateRoutes, element: <div>private</div> },
  { children: publicRoutes, element: <div>public</div> },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
