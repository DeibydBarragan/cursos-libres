import { coursesContext } from "@/components/context/coursesContext"
import { Course } from "@/components/context/interfaces";
import Layout from "@/components/layout/layout"
import { Button, Flex, Grid, GridItem, Heading, Modal, ModalHeader, ModalCloseButton, ModalContent, ModalOverlay, ModalBody, Text, useDisclosure } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useContext, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import InscriptionForm from "@/components/forms/inscriptionForm";
import { RiUserAddLine } from "react-icons/ri";
import Image from "next/image";

type Props = {}

export default function CourseView ({}: Props) {
  const { id } = useRouter().query
  const { isOpen, onOpen, onClose } = useDisclosure()
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
      course && (
      <Layout>
      <Grid
        as="section"
        w={{ base: "90%", lg: "70%" }}
        mx="auto"
        mt={{ base: 5, lg: 10 }}
        templateRows='repeat(3, min-content)'
        templateColumns='repeat(6, 1fr)'
        flexDir="column"
        display={{ base: "flex", md: "grid"}}
        gap={4}
        minH="80vh"
      >
        {/**Title */}
        <GridItem colSpan={4}>
          <Heading
            as={motion.h2}
            color="green.800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {course?.name}
          </Heading>
        </GridItem>
        {/**Photo */}
        <GridItem colSpan={4}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Flex
            justifyContent="start"
            w="full"
            h={64}
          >
            <Image
              src={`/images/courses/${course?.image}.webp`}
              alt={course?.name}
              width={400}
              height={400}
              sizes="100%"
              style={{
                borderRadius: '5%',
                objectFit: 'cover',
              }}
            />
          </Flex>
        </GridItem>
        {/**Dates */}
        <GridItem
          as={motion.div}
          rowSpan={2}
          colSpan={2}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }} 
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
            rightIcon={<RiUserAddLine size={20}/>}
            colorScheme='green'
            mt={5}
            onClick={onOpen}
          >
            Inscribirse al curso
          </Button>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size='lg'
            
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <ModalCloseButton/>
              </ModalHeader>
              <ModalBody>
                <InscriptionForm defaultCourse={course}/>
              </ModalBody>
            </ModalContent>
          </Modal>
        </GridItem>
        {/**Descripción */}
        <GridItem colSpan={4}
          as={motion.div}
          initial={{ y: 30 }}
          animate={{ x: 0 }}
        >
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
  )
}
