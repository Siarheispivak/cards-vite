import { SignInForm } from '@/features/auth/ui/sign-in-form'
import { TextField } from '@/shared/ui/text-field'

export function App() {
  return (
    <div>
      <TextField type={'search'} />
      <SignInForm />
    </div>
  )
}
