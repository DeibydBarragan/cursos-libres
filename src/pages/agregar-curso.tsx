import Layout from '@/components/layout/layout'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, Select, Textarea } from "@chakra-ui/react"
import { NextPage } from 'next'
import React from 'react'
import { FaSchool } from 'react-icons/fa'
import { FiAtSign } from "react-icons/fi"
import { motion } from 'framer-motion'

const AgregarCurso:NextPage = () => {
  return (
    <Layout>
      <Box
        as={motion.section}
        minH="90vh"
        w={{ base: "90%", lg: "40%", '2xl': "30%" }}
        mx="auto"
        my={10}
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <FormControl
          display="flex"
          flexDir="column"
          gap={5}
          as="form"
          minH="90vh"
        >
          <Heading
            as="h2"
            color="green.800"
          >
            Agregar un curso
          </Heading>
          <Flex
            flexDir="column"
            gap={5}
          >
            {/**Course name */}
            <Input 
              focusBorderColor="green.400" 
              type='text' variant="outline" 
              colorScheme="green" 
              isRequired
              placeholder='Nombre del curso'  
            />

            {/**Description */}
            <Textarea
              focusBorderColor="green.400" 
              colorScheme="green" 
              isRequired
              placeholder="¿De qué trata tu curso?"
            />
          
            {/**School */}
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color="gray.500"
              >
                <FaSchool/>
              </InputLeftElement>
              <Input 
                focusBorderColor="green.400" 
                type='text' colorScheme="green" 
                isRequired
                placeholder="Facultad a la que perteneces"  
              />
            </InputGroup>
        
            {/**Email */}
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color="gray.500"
              >
                <FiAtSign/>
              </InputLeftElement>
              <Input focusBorderColor="green.400" type='email'
                placeholder="Correo electrónico institucional"
                colorScheme="green"
                isRequired
              />
            </InputGroup>
        
          </Flex>
          <Button
            colorScheme="green"
            type="submit"
          >
            Agregar curso
          </Button>
        </FormControl>
      </Box>
    </Layout>
  )
}

export default AgregarCurso