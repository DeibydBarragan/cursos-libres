import { coursesContext } from "@/components/context/coursesContext"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react"
import { useContext } from "react"
import { FaSchool } from "react-icons/fa"
import { FiAtSign } from "react-icons/fi"

type Props = {}

export default function InscriptionForm({}: Props) {
  const { courses } = useContext(coursesContext)

  return (
    <Box
      as="section"
      id="inscription"
      minH="90vh"
      w={{ base: "90%", lg: "40%", '2xl': "30%" }}
      mx="auto"
      my={{
        base:10,
        lg:16
      }}
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
          Formulario de inscripción
        </Heading>
        <Flex
          flexDir="column"
          gap={5}
        >
          {/**Names */}
          <Input focusBorderColor="green.400"
            placeholder="Tus nombres"
            type='text'
            colorScheme="green"
            isRequired
          />

          {/**Lastnames */}
          <Input focusBorderColor="green.400"
            placeholder="Tus apellidos"
            type='text'
            colorScheme="green"
            isRequired
          />
        
          {/**Course */}
          <InputGroup>
            <Select
              focusBorderColor="green.400" 
              placeholder='Selecciona tu curso de interés'
              _placeholder={{ opacity: 0.4 }}
              isRequired
            >
              {
                courses.map((course, index) => (
                  <option value={course.id} key={index}>
                    {course.name}
                  </option>
                ))
              }
            </Select>
          </InputGroup>
        
          {/**School */}
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              color="gray.500"
            >
              <FaSchool/>
            </InputLeftElement>
            <Input focusBorderColor="green.400" type='text'
              placeholder="Facultad a la que perteneces"
              colorScheme="green"
              isRequired
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
      
          {/**Career */}
            <Input focusBorderColor="green.400"
            type='text'
            placeholder="Carrera que estudias"
            colorScheme="green"
            isRequired
          />
      
        </Flex>
        <Button
          colorScheme="green"
          type="submit"
        >
          Enviar
        </Button>
      </FormControl>
    </Box>
  )
}