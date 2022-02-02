import '../css/fonts.css';
import '../css/globals.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <main className='container flex h-full mx-auto max-w-3xl grow'>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
