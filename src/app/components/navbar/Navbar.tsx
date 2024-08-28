import { Flex, HStack } from "@chakra-ui/react"
import { DesktopNavbar } from "./DesktopNavbar";
import Image from "next/image";

export const Navbar = () => {
  return (
    <HStack
      justifyContent={'space-between'}
      alignItems={'center'}
      as={'header'}
      spacing={0}
      w={'100%'}
      minH={'60px'}
      pos={'fixed'}
      color={'white'}
      zIndex={1000}
    >
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        maxW={'150px'}
        flexGrow={1}
      >
        <Image
          src={'/worship-church.svg'}
          alt={'Logo de la iglesia'}
          width={50}
          height={50}
        />
      </Flex>
      <Flex
        as={'nav'}
        py={6}
        justifyContent={'center'}
        alignItems={'center'}
        flexGrow={2}
      >
        <DesktopNavbar />
      </Flex>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        maxW={'150px'}
        flexGrow={1}
      >
      </Flex>

    </HStack>
  )
}

