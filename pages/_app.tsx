import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../src/components/layout'
import { UseProvider } from '../src/provider/UseProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseProvider>
    <Layout>
      <Component {...pageProps} />
      </Layout>
      </UseProvider>
  )
}

export default MyApp
