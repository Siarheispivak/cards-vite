import { RouteObject } from 'react-router-dom'

import { CheckEmailPage, ForgotPasswordPage, SignInPage, SignUpPage } from '@/pages'
import { RecoveryPasswordPage } from '@/pages/auth-pages/recovery-password-page/recovery-password-page'
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
  {
    element: <ForgotPasswordPage />,
    path: routes.AUTH.FORGOT_PASSWORD,
  },
  {
    element: <RecoveryPasswordPage />,
    path: routes.AUTH.NEW_PASSWORD,
  },
]
