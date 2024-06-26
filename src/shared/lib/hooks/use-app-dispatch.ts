import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/shared/store/store'

export const useAppDispatch: () => AppDispatch = useDispatch
