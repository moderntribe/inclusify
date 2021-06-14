import 'tailwindcss/tailwind.css'
import { withQueryClient } from '../hooks'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withQueryClient(MyApp)
