import { Box, Button, Card, Flex, Heading, IconButton, Input, InputGroup, InputLeftElement, SimpleGrid } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { coursesContext } from "../context/coursesContext";
import CourseCard from "./courseCard/courseCard";
import { AnimatePresence, motion } from 'framer-motion'
import { FaSearch } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export default function CoursesSection() {
  const { courses } = useContext(coursesContext)

  // Search
  const [value, setValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  // Paginator
  const [showedCourses, setShowedCourses] = useState<any[]>([])
  const [pages, setPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    setPages(Math.ceil(courses.length/4))
    setShowedCourses([])
    setTimeout(() => {
      setShowedCourses(courses.slice((currentPage-1)*4, currentPage*4))
    }, 300)
  }, [courses, currentPage])

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
      {/* Search */}
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
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        mt={4}
      >
        <AnimatePresence>
          {showedCourses.map(course => {
            return value === '' || course.name.toLowerCase().includes(value.toLowerCase()) ? (
              <CourseCard
                key={course.id}
                course={course}
              />
            ) : null;
          })}
        </AnimatePresence>
      </SimpleGrid>
      <Flex
        gap={2}
        mt={4}
        justifyContent="center"
      >
        <IconButton
          aria-label="Previous page"
          icon={<MdArrowBackIosNew/>}
          colorScheme="green"
          variant="outline"
          onClick={() => {
            currentPage > 1 && setCurrentPage(currentPage - 1)
          }}
        />
        {Array(pages).fill(0).map((_, i) => {
          return (
            <Button
              key={i}
              colorScheme="green"
              variant="outline"
              aria-label={`Page ${i+1}`}
              {...(currentPage === i+1 && { variant: "solid"})}
              onClick={() => {
                setCurrentPage(i+1)
              }}
            >
              {i+1}
            </Button>
          )
        })}
        <IconButton
          aria-label="Next page"
          icon={<MdArrowForwardIos/>}
          colorScheme="green"
          variant="outline"
          onClick={() => {
            currentPage < pages && setCurrentPage(currentPage + 1)
          }}
        />
      </Flex>
    </Box>
  )
}