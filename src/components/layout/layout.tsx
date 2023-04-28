import { Flex, VStack } from "@chakra-ui/react"
import Navbar from "../navbar/navbar"

type Props = {
  children: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <>
      <VStack role="main" spacing={0}>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Flex flexDir="column" width="full">
          {children}
        </Flex>
      </VStack>
    </>
  )
}