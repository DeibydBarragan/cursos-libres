import { Box, Card, Heading, Input, InputGroup, InputLeftElement, SimpleGrid } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { coursesContext } from "../context/coursesContext";
import CourseCard from "./courseCard/courseCard";
import { AnimatePresence, motion } from 'framer-motion'
import { FaSearch } from "react-icons/fa";

export default function CoursesSection() {
  const { courses } = useContext(coursesContext)

  const [value, setValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Box
      as="section"
      id="courses"
      minH="90vh"
      w={{ base: "90%", lg: "80%", '2xl': "70%" }}
      mx="auto"
      my={10}
    >
      <Heading
        as={motion.h2}
        color="green.800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Cursos libres
      </Heading>
      <InputGroup mt={4} w={
        { base: "100%", md: "50%" }
      }>
          <InputLeftElement
            pointerEvents='none'
            color="gray.500"
          >
            <FaSearch/>
          </InputLeftElement>
          <Input
            focusBorderColor="green.400"
            type='text'
            placeholder="Buscar curso..."
            colorScheme="green"
            value={value}
            onChange={handleChange}
            isRequired
          />
        </InputGroup>
      <SimpleGrid
        spacing={6}
        columns={{ base: 1, md: 2, lg: 4 }}
        mt={4}  
      >
        <AnimatePresence>
          {courses.map(course => {
            return value === '' || course.name.toLowerCase().includes(value.toLowerCase()) ? (
              <CourseCard
                key={course.id}
                course={course}
              />
            ) : null;
          })}
        </AnimatePresence>
      </SimpleGrid>
    </Box>
  )
}