import { Course } from "@/components/context/interfaces"
import { Button, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"

 type Props = {
  course: Course
}

export default function CourseCard({course}: Props) {
  return (
    <Card
      maxW='sm'
      shadow="2xl"
      border='1px'
      borderColor='gray.200'
      transition='all 0.2s ease-in-out'
      _hover={{
        transform: "translate(0, -7px)",
      }}
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