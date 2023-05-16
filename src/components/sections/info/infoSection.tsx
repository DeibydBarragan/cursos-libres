import { Box, SimpleGrid, Heading, Flex } from '@chakra-ui/react'
import React from 'react'
import InfoCard from './infoCard/infoCard';
import { infoAreas } from './info.data';
import { motion } from 'framer-motion';

type Props = {}

export default function InfoSection({}: Props) {
  return (
    <Flex
      as="section"
      minH="90vh"
      w={{ base: "90%", lg: "80%", '2xl': "70%" }}
      id="info"
      mx="auto"
      flexDir="column"
      justifyContent="center"
      pb={20}
    >
      <Heading
        as={motion.h2}
        fontSize="4xl"
        color="green.800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        >
        Áreas de Bienestar
      </Heading>
      <Box
        display={{ base:"grid", xl: "flex" }}
        flexDir="row"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }}
        gap={5}
        mt={8}
        justifyContent="center"
      >
        {
          infoAreas.map((info, index) => (
            <InfoCard key={index} info={info}/>
          ))
        }
      </Box>
    </Flex>
  )
}