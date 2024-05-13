import { RouteObject } from 'react-router-dom'

import { SignInForm } from '@/features/auth/ui'

export const publicRoutes: RouteObject[] = [
  {
    element: (
      <div>
        <SignInForm onSubmit={() => {}} />
      </div>
    ),
    path: '/login',
  },
]
