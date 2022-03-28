import { AxiosInstance } from 'axios'
import { AuthFunctionListenerType, CredentialType } from '../interface'

export class AuthClient {
  constructor(
    private client: AxiosInstance,
    private authStateListener: AuthFunctionListenerType = []
  ) {}

  notifyAuthStateListener(token: string) {
    this.authStateListener.forEach(listener => listener(token))
  }

  get accessToken() {
    return localStorage.getItem('act')
  }

  set accessToken(token) {
    if (typeof token === 'undefined' || token === null) {
      localStorage.removeItem('act')
      return
    }

    localStorage.setItem('act', token)
  }

  get refreshToken() {
    return localStorage.getItem('rft')
  }

  set refreshToken(token) {
    if (typeof token === 'undefined' || token === null) {
      localStorage.removeItem('rft')
      return
    }

    localStorage.setItem('rft', token)
  }

  async refreshAccessToken() {
    try {
      // const response = await this.client.put('/refresh_token', {
      //   refresh_token: this.refreshToken,
      // })
      this.accessToken = 'ACCESS_TOKEN' // TODO: using reponse data
      this.refreshToken = 'REFRESH_TOKEN' // TODO: using reponse data
    } catch (error) {
      this.accessToken = null
      this.refreshToken = null
      this.notifyAuthStateListener(this.accessToken!)
    }
  }

  async signIn({ email, password }: CredentialType) {
    const response = await this.client.post('/auth', { email, password })
    console.log('response', response)
    this.accessToken = 'ACCESS_TOKEN' // TODO: using reponse data
    this.refreshToken = 'REFRESH_TOKEN' // TODO: using reponse data
  }

  async signOut() {
    // await this.client.delete('/sessions')
    this.accessToken = null
    this.refreshToken = null
  }
}
