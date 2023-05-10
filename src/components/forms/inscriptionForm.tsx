import { useContext, useState } from "react"
import { FaSchool } from "react-icons/fa"
import { FiAtSign, FiSend } from "react-icons/fi"
import { Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react"
import { coursesContext } from "@/components/context/coursesContext"
import { Course } from "../context/interfaces"

type Props = {
  defaultCourse?: Course
}

export default function InscriptionForm({defaultCourse}: Props) {
  const { courses } = useContext(coursesContext)

  return (
    <FormControl
      display="flex"
      flexDir="column"
      gap={5}
      as="form"
      mb="5"
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
            _placeholder={{ opacity: 0.4 }}
            isRequired
            {...defaultCourse 
              ? {placeholder: defaultCourse.name,
                  defaultValue: defaultCourse.id,
                  isDisabled: true
                }
              : {placeholder: "Selecciona un curso"}
            }
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
        rightIcon={<FiSend size={18}/>}
        colorScheme="green"
        type="submit"
      >
        Inscribirse
      </Button>
    </FormControl>
  )
}