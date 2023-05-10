import NavLink from '@/components/navbar/navLink'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function HomeSection () {
  return (
    <Box
      as={motion.section}
      id="home"
      h="90vh"
      position="relative"
      backgroundColor="black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
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
        as={motion.div}
        position="absolute"
        top={{ base: "10%", lg: "20%", '2xl': "30%" }}
        left={{ base:"5%", lg: "15%" }}
        w={{ base: "90%", lg: "50%" }}
        direction="column"
        gap={5}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transitionDuration="0.5s"
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
          fontSize="lg"
          color="white"
          fontWeight={700}
          textShadow="2px 2px 8px #000000"
        >
          La Universidad Nacional de Colombia, sede Bogotá, desde el área de Bienestar Universitario proporciona diversos cursos libres en deporte y otras áreas con el propósito de ofrecer una formación integral que incluya hábitos saludables, uso adecuado del tiempo libre y la integración de la comunidad universitaria.
        </Text>
        <Flex
          gap={5}
        >
          <NavLink
            to='courses'
          >
            <Button
              colorScheme="green"
              shadow="md"
            >
              Ver cursos
            </Button>
          </NavLink>
          <NavLink
            to='inscription'
          >
            <Button
              colorScheme="green"
              shadow="md"
            >
              Inscribirse a un curso
            </Button>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  )
}