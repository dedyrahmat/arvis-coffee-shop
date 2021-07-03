import './app.css'
import 'tailwindcss/tailwind.css'
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper, persistor } from '../store/store';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <PersistGate persistor={persistor} loading={null}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </PersistGate>
  )

}

export default wrapper.withRedux(MyApp)
