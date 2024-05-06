import { Navigate, Outlet } from 'react-router-dom'

export const PrivateLayout = () => {
  const isAuthenticating = false

  return isAuthenticating ? <Outlet /> : <Navigate to={'/login'} />
}
