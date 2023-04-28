import { coursesContext } from "@/components/context/coursesContext"
import { Course } from "@/components/context/interfaces";
import Layout from "@/components/layout/layout"
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useContext, useState, useEffect } from 'react';

type Props = {}

export default function CourseView ({}: Props) {
  const { id } = useRouter().query

  const { courses } = useContext(coursesContext)
  const [course, setCourse] = useState<Course | null>(null)

  useEffect(() => {
    if (courses) {
      const foundCourse = courses.find((course: Course) => course.id.toString() === id)
      if (foundCourse) {
        setCourse(foundCourse)
      }
    }
  }, [courses, id])

  return (
    <Layout>
      <Box
        as="section"
        h="70vh"
        w={{ base: "90%", lg: "60%", '2xl': "40%" }}
        mx="auto"
        my={10}
      >
        {course && (
          <Flex
            flexDir="column"
            gap={5}
          >
            <Heading

              as="h2"
              color="green.800"
            >
              {course.name}
            </Heading>
            <Flex
              h={64}
              gap={8}
            >
              <Flex
                w="full"
                h="full"
                justifyContent="center"
              >
                <Image
                  src={course.image}
                  alt={course.name}
                  objectFit='cover'
                  borderRadius='lg'
                  maxW="full"
                  height="full"
                />
              </Flex>
              <Flex
                flexDir='column'
                w='full'
                h='full'
              >
                {/**Register date */}
                <Text
                  as='h3'
                  fontSize='4vh'
                  fontWeight={600}
                  color='green.800'
                >
                  Inscripciones:
                </Text>
                <Text
                  as ='h4'
                  fontSize='lg'
                >
                  {course.regDate} - {course.endRegDate}
                </Text>
                
                {/**Start date */}
                <Text
                  as='h3'
                  fontSize='3vh'
                  fontWeight={600}
                  color='green.800'
                >
                  Fecha de inicio:
                </Text>
                <Text
                  as ='h4'
                  fontSize='lg'
                >
                  {course.startDate}
                </Text>
                {/**End date */}
                <Text
                  as='h3'
                  fontSize='3vh'
                  fontWeight={600}
                  color='green.800'
                >
                  Fecha de finalización:
                </Text>
                <Text
                  as ='h4'
                  fontSize='lg'
                >
                  {course.endDate}
                </Text>
              </Flex>
            </Flex>
            {/**Description */}
            <Box>
              <Text
                as='h3'
                fontSize='4vh'
                fontWeight={600}
                color='green.800'
              >
                Descripción
              </Text>
              <Text
                as='p'
                fontSize='lg'
              >
                {course.description}
              </Text>
            </Box>
          </Flex>
        )}
      </Box>
    </Layout>
  )
}
