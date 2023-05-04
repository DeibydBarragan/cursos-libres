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
    w={{ base: "90%", lg: "85%", '2xl': "80%" }}
    id="info"
    mx="auto"
    flexDir="column"
    my={10}
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
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        mt={8}
      >
        {
          infoAreas.map((info, index) => (
            <InfoCard key={index} info={info}/>
          ))
        }
      </SimpleGrid>
    </Flex>
  )
}