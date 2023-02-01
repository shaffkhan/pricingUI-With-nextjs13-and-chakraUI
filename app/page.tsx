'use client'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Header'
import Pricing from './Pricing'
import Rectangles from './Rectangles'

export default function Home() {
  return (
    <ChakraProvider>
   <Header />
    <Pricing />
    <Rectangles />
    </ChakraProvider>
  )
}
