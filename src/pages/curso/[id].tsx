import { coursesContext } from "@/components/context/coursesContext"
import { Course } from "@/components/context/interfaces";
import Layout from "@/components/layout/layout"
import { Button, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useContext, useState, useEffect } from 'react';
import { motion } from "framer-motion";

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
      <Grid
        as={motion.section}
        w={{ base: "90%", lg: "70%" }}
        mx="auto"
        mt={{ base: 5, lg: 10 }}
        templateRows='repeat(3, min-content)'
        templateColumns='repeat(6, 1fr)'
        flexDir="column"
        display={{ base: "flex", md: "grid"}}
        gap={4}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/**Title */}
        <GridItem colSpan={4}>
          <Heading
            as="h2"
            color="green.800"
          >
            {course?.name}
          </Heading>
        </GridItem>
        {/**Photo */}
        <GridItem colSpan={4}>
          <Flex
            justifyContent="center"
            w="full"
            h={64}
          >
            <Image
              src={course?.image}
              alt={course?.name}
              objectFit='cover'
              borderRadius='lg'
              maxH="full"
            />
          </Flex>
        </GridItem>
        {/**Dates */}
        <GridItem
          as={motion.div}
          rowSpan={2}
          colSpan={2}
          initial={{ y: -100 }}
          animate={{ y: 0 }} 
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
            {course?.regDate} - {course?.endRegDate}
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
            {course?.startDate}
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
            {course?.endDate}
          </Text>
          {/**Inscription button */}
          <Button
            colorScheme='green'
            mt={5}
          >
            Inscribirse al curso
          </Button>
        </GridItem>
        {/**Descripción */}
        <GridItem colSpan={4}>
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
            {course?.description}
          </Text>
        </GridItem>
      </Grid>
    </Layout>
  )
}
