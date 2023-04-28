import { Text } from "@chakra-ui/react"
import { Link } from "react-scroll"

type Props = {
  to: string
  children: React.ReactNode
}

export default function NavLink({to, children}: Props) {
  return (
    <Link
      to={to}
      smooth
      duration={500}
      offset={-110}
    >
      <Text
        color="gray.500"
        fontSize="md"
        _hover={{
          color: "green.700",
          textDecoration: "none",
          cursor: "pointer"
        }}
      >
        {children}
      </Text>
    </Link>
  )
}