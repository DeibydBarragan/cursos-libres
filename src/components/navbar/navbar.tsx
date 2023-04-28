import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, IconButton, Image, Link, useBoolean } from '@chakra-ui/react'
import { ROUTES } from './links.data'
import { BiMenu } from 'react-icons/bi'

export default function Navbar() {
  const [showMenu, setShowMenu] = useBoolean(false)

  return (
    <Box
      as="nav"
      display="flex"
      bg="white"
      boxShadow="xl"
      height={20}
      position={"sticky"}
      top={0}
      zIndex={1}
      width="full"
    >
      <Flex
        alignItems="center"
        height="full"
        w="full"
        gap={10}
        px={{ base: 5, lg: 20}}
        justifyContent={{ base: "space-between", lg: "flex-start" }}
      >
        <Link>
          <Image
            src="/logo.png"
            alt="Logo"
            height={24}
          />
        </Link>
        <Box
          flexDirection="row"
          display={{base: "none", lg: "flex"}}
          fontSize="lg"
          fontWeight={700}
          gap={25}
        >
          {
            ROUTES.map((route, index) => (
              <Link
                key={index}
                color="gray.500"
                _hover={{
                  color: "green.700",
                  textDecoration: "none"
                }}
              >
                {route.name}
              </Link>
          ))}
        </Box>
        <IconButton
          display={{base: "flex", lg: "none"}}
          icon={<BiMenu size={40}/>}
          variant="link"
          colorScheme='green'
          aria-label='Menu'
          onClick={setShowMenu.toggle}
        />
        {/* Mobile Menu */}
        <Drawer
          isOpen={showMenu}
          placement="right"
          onClose={setShowMenu.off}
        >
          <DrawerOverlay/>
          <DrawerContent
            flexDirection="column"
            alignItems="center"
            pt={20}
            height="full"
            gap={10}
            px={30}
          >
            <DrawerCloseButton
              color="green.700"
              fontSize={20}
              mt={3}
            />
            {
              ROUTES.map((route, index) => (
                <Link
                  key={index}
                  color="gray.600"
                  fontSize="xl"
                  _hover={{
                    color: "green.700",
                    textDecoration: "none"
                  }}
                >
                  {route.name}
                </Link>
            ))}
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}