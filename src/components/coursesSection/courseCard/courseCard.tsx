import { Course } from "@/components/context/interfaces"
import { Button, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react"
import Link from "next/link"
import { motion } from 'framer-motion'
import InscriptionForm from "@/components/forms/inscriptionForm"

 type Props = {
  course: Course
}

export default function CourseCard({course}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Card
      display="flex"
      justifyContent="space-between"
      as={motion.div}
      maxW='sm'
      shadow="xl"
      border='1px'
      borderColor='gray.200'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -7 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <Link
        href={`/curso/${course.id}`}
      >
        <CardBody>
          <Flex
            justifyContent='center'
            w='full'
            h={28}
          >
            <Image
              src={course.image}
              alt={course.name}
              objectFit='cover'
              borderRadius='lg'
              h='full'
            />
          </Flex>
          <Stack mt='6' spacing='3'>
            <Heading
              size='md'
              color='green.900'
            >
              {course.name}
            </Heading>
            <Text
              fontSize='lg'
              color='gray.500'
            >
              Inscripciones: 
            </Text>
            <Text fontSize='md'>
              {course.regDate} - {course.endRegDate}
            </Text>
          </Stack>
        </CardBody>
      </Link>
      <CardFooter
        borderTop="1px"
        borderColor="gray.300"
      >
        <Button 
          colorScheme='green'
          w='full'
          onClick={onOpen}
        >
          Inscribirme
        </Button>
      </CardFooter>
      
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
    </Card>
  )
}
