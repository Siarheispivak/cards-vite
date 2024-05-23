import { RouteObject } from 'react-router-dom'

import { CheckEmailPage, SignInPage, SignUpPage } from '@/pages'
import { routes } from '@/shared/const'

export const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: routes.AUTH.SING_IN,
  },
  {
    element: <SignUpPage />,
    path: routes.AUTH.SIGN_UP,
  },
  {
    element: <CheckEmailPage />,
    path: routes.AUTH.CHECK_EMAIL,
  },
]
