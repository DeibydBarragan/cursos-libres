import InscriptionForm from "@/components/forms/inscriptionForm"
import { Box } from "@chakra-ui/react"
import { motion } from 'framer-motion'

export default function InscriptionSection() {

  return (
    <Box
      as={motion.section}
      id="inscription"
      minH="90vh"
      w={{ base: "90%", lg: "40%", '2xl': "30%" }}
      mx="auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <InscriptionForm/>
    </Box>
  )
}