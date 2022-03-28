import { useRouter } from 'next/router'
import { useAppClient } from '@client/useAppClient'
import { CredentialType } from '@client/interface'
import { LoginPageProps } from '@features/authentication/pages/LoginPage/interface'
import React from 'react'
import { LoginForm } from '@model/FormModels/LoginFormModel'

interface AuthType {
  email: string
  password: string
}

const withLoginPage = (Component: React.FC<LoginPageProps>) => {
  function Hoc() {
    const client = useAppClient()
    const { push } = useRouter()

    const handleLogin = async (formValues: LoginForm): Promise<void> => {
      // await client?.auth.signIn(loginParams)
      push('/book')
    }
    const initialValues = {
      email: '',
      password: '',
    }
    const newProps = { handleLogin, initialValues }
    return <Component {...newProps} />
  }
  Hoc.displayName = `withLoginPage(${
    Component.displayName ?? Component.name ?? 'Component'
  })`
  return Hoc
}

export { withLoginPage }
