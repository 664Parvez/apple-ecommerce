import '../styles/globals.css'
import Head from 'next/head'

import store from "../redux/store"
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link rel="shortcut icon" href="/image/logo.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/image/logo.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/image/logo.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/image/logo.png"/>
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
