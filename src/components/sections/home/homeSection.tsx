import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { scroller } from 'react-scroll'

export default function HomeSection () {
  const handleClickBtn = (to:string) => {
    scroller.scrollTo(to, {
      smooth: true,
      duration: 500,
      offset: -110
    })
  }

  return (
    <Box
      as={motion.section}
      id="home"
      h="90vh"
      position="relative"
      backgroundColor="black"
      display="flex"
      alignItems="center"
      pl={{
        base: "4%", lg: "10%", xl: "15%"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
    >
      <Image
        src="/images/fondo.jpg"
        alt="Fondo de la seccion de inicio"
        priority={true}
        fill={true}
        sizes="100%, 100%"
        style={{
          objectFit: 'cover',
          filter: 'brightness(0.5)',
        }}
      />
      <Flex
        as={motion.div}
        w={{ base: "90%", lg: "50%" }}
        direction="column"
        gap={5}
        mb={10}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transitionDuration="0.5s"
        zIndex={1}
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
          <Button
            colorScheme="green"
            shadow="md"
            onClick={() => handleClickBtn('courses')}
          >
            Ver cursos
          </Button>
          <Button
            colorScheme="green"
            shadow="md"
            onClick={() => handleClickBtn('inscription')}
          >
            Inscribirse a un curso
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}