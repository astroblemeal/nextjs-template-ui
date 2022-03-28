import { AppProps } from 'next/app'
import '@assets/styles/index.css'
import 'reflect-metadata'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Client } from '@client/Client'
import axios from 'axios'
import { API_URL } from '@config/api'
import { AppClientProvider } from '@client/useAppClient'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
