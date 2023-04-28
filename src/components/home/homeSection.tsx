import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function HomeSection () {
  return (
    <Box
      as="section"
      h="90vh"
      position="relative"
      backgroundColor="black"
    >
      <Image
        src="/images/fondo.jpg"
        alt="Fondo de la seccion de inicio"
        h="100%"
        w="full"
        objectFit="cover"
        filter="brightness(70%)"
        brightness="50%"
      />
      <Flex
        position="absolute"
        top={{ base: "10%", lg: "20%", '2xl': "30%" }}
        left={{ base:"5%", lg: "15%" }}
        w={{ base: "90%", lg: "50%" }}
        direction="column"
        gap={5}
      >
        <Heading
          as="h1"
          color="white"
          fontFamily="Raleway, sans-serif"
          fontWeight={900}
          textShadow="2px 2px 8px #000000"
        >
          ¿Qué es un curso libre en la Universidad Nacional de Colombia?
        </Heading>
        <Text 
          fontSize="xl"
          color="white"
          fontWeight={700}
          textShadow="2px 2px 8px #000000"
        >
          Lorem ipsum dolor sit amet consectetur. Ultrices tellus neque amet scelerisque morbi pellentesque eget. Id duis volutpat ipsum sed. Nunc nulla tristique aenean malesuada facilisi luctus. Tempor sit etiam faucibus libero maecenas.
        </Text>
        <Flex
          gap={5}
        >
          <Button
            colorScheme="green"
            shadow="md"
          >
            Ver cursos
          </Button>
          <Button
            colorScheme="green"
            shadow="md"
          >
            Inscribirse a un curso
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}