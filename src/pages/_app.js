import '@/styles/globals.css'
import { theme } from '@/theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/open-sans'
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
