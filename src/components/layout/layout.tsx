import { Flex, VStack } from "@chakra-ui/react"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

type Props = {
  children: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <VStack role="main" spacing={0} >

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Flex flexDir="column" minH="full" gap={16} w="full">
        {children}
        <Footer/>
      </Flex>
    </VStack>
  )
}