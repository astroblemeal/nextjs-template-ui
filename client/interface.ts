import { AxiosInstance } from 'axios'
import { Client } from '@client/Client'

export type AuthFunctionListenerType = { (data: any): void }[]

export interface CredentialType {
  email: string
  password: string
}

export interface AppClientProviderType {
  children: React.ReactNode
  client: Client
}
