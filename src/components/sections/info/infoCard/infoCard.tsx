import { Box, Button, Card, CardBody, CardFooter, Divider, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'
import { WellbeingInfo } from '../interfaces'
import { motion } from 'framer-motion'

type Props = {
  info: WellbeingInfo
}

export default function InfoCard({info}: Props) {
  return (
    <Card
      shadow="lg"
      as={motion.div}
      initial={{ y: 50, opacity:0 }}
      whileInView={{ y: 0, opacity: 1 }}
      border="1px"
      borderColor="green.300"
    >
      <CardBody
        display="flex"
        justifyContent="space-between"
        flexDir="column"
        alignItems="center"
        gap={2}
      >
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <Heading
            as="h4"
            fontSize="md"
            fontWeight={600}
            color="gray.500"
          >
            Área de
          </Heading>
          <Heading
            as="h3"
            fontSize="lg"
            color="green.900"
            textAlign="center"
          >
            {info.title}
          </Heading>
        </Box>
        <Box w="60%" color={info.color}>
          {info.icon}
        </Box>
      </CardBody>
      <CardFooter>
        <Popover>
          <PopoverTrigger>
            <Button
              colorScheme="green"
              w="full"
            >
              Información
            </Button>
          </PopoverTrigger>
          <PopoverContent shadow="md">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Contacto</PopoverHeader>
            <PopoverBody>
              <Text>
                {info.email}
              </Text>
              <Text>
                {info.phone}
              </Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </CardFooter>
    </Card>
  )
}