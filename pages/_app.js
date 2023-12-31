import '@/styles/app.scss'
import { ThemeProvider } from 'next-themes'

export default function App ({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
