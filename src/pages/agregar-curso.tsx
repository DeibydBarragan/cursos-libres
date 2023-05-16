import Layout from '@/components/layout/layout'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, SimpleGrid, Textarea } from "@chakra-ui/react"
import { NextPage } from 'next'
import React from 'react'
import { FaSchool } from 'react-icons/fa'
import { FiAtSign } from "react-icons/fi"
import { HiOutlinePlus } from "react-icons/hi"
import { BsFileEarmarkImage } from "react-icons/bs"
import { motion } from 'framer-motion'
import InputDate from '@/components/forms/inputDate/inputDate'
import Head from 'next/head'

const AgregarCurso:NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Agregar curso</title>
      </Head>
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
          aria-label='Formulario para agregar un curso'
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
              aria-label='Nombre del curso' 
            />

            {/**Description */}
            <Textarea
              focusBorderColor="green.400" 
              colorScheme="green" 
              isRequired
              placeholder="¿De qué trata tu curso?"
              aria-label='Descripción del curso'
            />

            {/**Photo */}
            <Button
              leftIcon={<BsFileEarmarkImage/>}
              color="gray.500"
              variant="outline"
              fontWeight={500}
              justifyContent ="start"
            >
              Foto de tu curso
            </Button>
            <Input
              focusBorderColor="green.400"
              colorScheme="green"
              type="file"
              isRequired
              display="none"
              aria-label="Foto del curso"
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
                aria-label='Facultad a la que perteneces'
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
                aria-label='Correo electrónico institucional'
              />
            </InputGroup>

            <SimpleGrid
              columns={{
                base: 1,
                md: 2
              }}
              spacing={7}
            >
              {/**Inscription date */}
              <InputDate label="Inicio de inscripciones"/>

              {/**End inscription date */}
              <InputDate label="Fin de inscripciones"/>

              {/**Start date */}
              <InputDate label="Inicio del curso"/>

              {/**End date */}
              <InputDate label="Fin del curso"/>
    
            </SimpleGrid>
          </Flex>
          <Button
            rightIcon={<HiOutlinePlus size={20}/>}
            colorScheme="green"
            type="submit"
            aria-label='Agregar curso'
          >
            Agregar curso
          </Button>
        </FormControl>
      </Box>
    </Layout>
  )
}

export default AgregarCurso