import { coursesContext } from "@/components/context/coursesContext"
import { Course } from "@/components/context/interfaces";
import Layout from "@/components/layout/layout"
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
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
        w={{ base: "90%", lg: "60%", '2xl': "45%" }}
        mx="auto"
        my={{ base: 5, md: 10 }}
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
            {/**
             * To do: fix it
             */}
            <Flex
              height={{ base: "auto", md: "40vh" }}
              gap={8}
              flexDir={{
                base: "column",
                md: "row"
              }}
            >
              <Flex
                justifyContent="center"
                w={{ base: "full", md: "60%" }}
                maxH="35vh"
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
                {/**Inscription button */}
                <Button
                  colorScheme='green'
                  mt={5}
                >
                  Inscribirse al curso
                </Button>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere temporibus perspiciatis perferendis illum consectetur minus modi odit, quia enim ut sapiente fugiat ratione minima aliquam impedit quidem veritatis obcaecati.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, id quae quibusdam, aperiam quia praesentium animi dolorum ut vitae expedita, perspiciatis delectus modi! Tenetur error ratione delectus rem blanditiis incidunt?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati enim eos harum, laborum architecto ipsa minima voluptatem velit optio expedita itaque a ad dolores sequi neque, corporis accusantium totam unde!
              </Text>
            </Box>
          </Flex>
        )}
      </Box>
    </Layout>
  )
}
