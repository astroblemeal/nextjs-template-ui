import { createContext, useContext } from 'react'
import { Client } from '@client/Client'
import { AppClientProviderType } from '@client/interface'

const AppClientContext = createContext<{ client: Client | null }>({
  client: null,
})

export function AppClientProvider({ children, client }: AppClientProviderType) {
  const value = {
    client,
  }

  return (
    <AppClientContext.Provider value={value}>
      {children}
    </AppClientContext.Provider>
  )
}

export function useAppClient() {
  return useContext(AppClientContext).client
}
