import { Provider } from 'react-redux'

import { Router } from '@/app/routes'
import { store } from '@/shared/store/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
