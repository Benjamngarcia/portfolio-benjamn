import { ThemeProvider } from "@emotion/react"
import MainLayout from "../layouts/MainLayout"
import theme from "../styles/theme"
import '../sass/index.scss'


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}
