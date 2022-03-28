import { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

import { SampleClientActions } from './collections/SampleClient'
import { AuthClient } from './collections/AuthClient'
import { AuthFunctionListenerType } from './interface'

function injectAuthorizationToken(
  headers: Record<string, unknown>,
  token: string
) {
  return { ...headers, Authorization: `Bearer ${token}` }
}

export class Client {
  isRefreshingAccessToken = false

  authStateListener = [] as AuthFunctionListenerType

  retryRequestTasks = [] as AuthFunctionListenerType

  constructor(private client: AxiosInstance) {
    this.setupClient()
  }

  public auth = new AuthClient(this.client, this.authStateListener)

  public book = new SampleClientActions(this.client)

  onAuthStateChange(listener: () => void) {
    this.authStateListener.push(listener)

    return () => this.authStateListener.filter(l => listener === l)
  }

  setupClient() {
    this.client.interceptors.request.use(config => {
      if (this.auth.accessToken) {
        return this.configWithAuthorization(config, this.auth.accessToken)
      }

      return config
    })

    this.client.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        if (!error.isAxiosError) {
          return Promise.reject(error)
        }

        if (!this.isAccessTokenExpired(error)) {
          return Promise.reject(error)
        }

        if (!this.isRefreshingAccessToken) {
          this.isRefreshingAccessToken = true
          this.auth
            .refreshAccessToken()
            .then(
              this.handleRefreshAccessTokenSuccess.bind(this),
              this.handleRefreshAccessTokenFail.bind(this)
            )
        }

        const retry = this.retry(error)

        return retry
      }
    )
  }

  configWithAuthorization(config: AxiosRequestConfig, token: string) {
    const { headers = {} } = config

    if (headers.Authorization) {
      return config
    }

    return {
      ...config,
      headers: injectAuthorizationToken(headers, token),
    }
  }

  retry(error: AxiosError) {
    return new Promise((resolve, reject) => {
      this.retryRequestTasks.push(accessTokenOrError => {
        if (typeof accessTokenOrError !== 'string') {
          reject(accessTokenOrError)
          return
        }

        const config = { ...error.config }
        config.headers = injectAuthorizationToken(
          error.config.headers,
          accessTokenOrError
        )

        resolve(this.client.request(config))
      })
    })
  }

  retryRequestQueues(accessTokenOrError: AxiosError | string) {
    this.retryRequestTasks.forEach(queue => queue(accessTokenOrError))

    this.retryRequestTasks = []
  }

  handleRefreshAccessTokenSuccess() {
    this.isRefreshingAccessToken = false
    this.retryRequestQueues(this.auth.accessToken!)
  }

  handleRefreshAccessTokenFail(error: AxiosError) {
    this.isRefreshingAccessToken = false
    this.retryRequestQueues(error)
  }

  isAccessTokenExpired(error: AxiosError) {
    return (
      error.config &&
      error.config.url !== `/sessions` &&
      error.config.url !== `/refresh_token` &&
      error.response &&
      error.response.status === 401
    )
  }
}
