import { Course } from "@/components/context/interfaces"
import { Button, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import { motion } from 'framer-motion'

 type Props = {
  course: Course
}

export default function CourseCard({course}: Props) {
  return (
    <Card
      as={motion.div}
      maxW='sm'
      shadow="xl"
      border='1px'
      borderColor='gray.200'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -7 }}
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
              maxH='full'
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
      <Divider
        borderColor='gray.400'
      />
      <CardFooter>
        <Button 
          colorScheme='green'
          w='full'
        >
          Inscribirme
        </Button>
      </CardFooter>
    </Card>
  )
}