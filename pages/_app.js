import 'tailwindcss/tailwind.css'
import { AuthProvider } from '../components/Auth'

function MyApp({ Component, pageProps }) {
  return <AuthProvider {...pageProps}><Component {...pageProps} /></AuthProvider>
}

export default MyApp
