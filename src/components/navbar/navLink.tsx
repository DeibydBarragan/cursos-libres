import { Text } from "@chakra-ui/react"
import { Link } from "react-scroll"

type Props = {
  to: string
  children: React.ReactNode
  onClick?: () => void
}

export default function NavLink({to, children, onClick}: Props) {
  return (
    <Link
      to={to}
      smooth
      duration={500}
      offset={-110}
      onClick={onClick}
    >
      <Text
        color="gray.500"
        fontSize="md"
        _hover={{
          color: "green.700",
          cursor: "pointer"
        }}
      >
        {children}
      </Text>
    </Link>
  )
}