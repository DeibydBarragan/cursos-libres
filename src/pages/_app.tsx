import { CoursesContextProvider } from '@/components/context/coursesContext'
import { ScrollingProvider } from '@/components/context/scrollingContext'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ScrollingProvider>
        <CoursesContextProvider>
          <Component {...pageProps} />
        </CoursesContextProvider>
      </ScrollingProvider>
    </ChakraProvider>
  )
}
