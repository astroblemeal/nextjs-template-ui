import { CredentialType } from '@client/interface'

export type LoginPageProps = {
  handleLogin: (form: CredentialType) => void
  initialValues: CredentialType
}
