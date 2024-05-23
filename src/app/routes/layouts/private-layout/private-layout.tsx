import { Navigate, Outlet } from 'react-router-dom'

import { useAuthMeQuery } from '@/shared/services'

export const PrivateLayout = () => {
  const { isError, isLoading } = useAuthMeQuery()

  if (isLoading) {
    return <>Loading...</>
  }

  return isError ? (
    <Navigate to={'/login'} />
  ) : (
    <div>
      <Outlet />
    </div>
  )
}
