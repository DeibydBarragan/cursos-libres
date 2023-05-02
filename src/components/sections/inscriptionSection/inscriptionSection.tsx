import InscriptionForm from "@/components/forms/inscriptionForm"
import { Box, Flex } from "@chakra-ui/react"
import { motion } from 'framer-motion'

export default function InscriptionSection() {

  return (
    <Flex
      as={motion.section}
      minH="90vh"
      w={{ base: "90%", lg: "40%", '2xl': "30%" }}
      mx="auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      flexDir="column"
      justifyContent="center"
    >
      <div id="inscription">
        <InscriptionForm/>
      </div>
    </Flex>
  )
}