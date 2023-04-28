import { Box, Card, Heading, SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import { coursesContext } from "../context/coursesContext";
import CourseCard from "./courseCard/courseCard";

export default function CoursesSection() {
  const { courses } = useContext(coursesContext)

  return (
    <Box
      as="section"
      id="courses"
      minH="90vh"
      w={{ base: "90%", lg: "80%", '2xl': "60%" }}
      mx="auto"
      my={10}
    >
      <Heading
        as="h2"
        color="green.800"
      >
        Cursos libres
      </Heading>
      <SimpleGrid
        spacing={6}
        templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
        mt={8}  
      >
        {courses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}