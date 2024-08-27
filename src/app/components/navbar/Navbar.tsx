import { Flex, Divider, Text, VStack } from "@chakra-ui/react"
import { IoLogoFacebook, IoLogoInstagram, IoCall } from "react-icons/io5";

export const Navbar = () => {
  return (
    <VStack
      as={'header'}
      spacing={0}
      w={'100%'}
      minH={'70px'}
      pos={'fixed'}
      color={'white'}
      zIndex={1000}
    >
      <Flex
        w={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        p={2}
      >
        <Flex
          alignItems={'center'}
        >
          <Text>
            Seguinos:
          </Text>
          <Flex
            alignItems={'center'}
            gap={2}
            ml={2}
          >
            <IoLogoFacebook size={'20px'} />
            <IoLogoInstagram size={'20px'} />
          </Flex>
        </Flex>
        <Flex
          alignItems={'center'}
          gap={2}
        >
          <IoCall size={'20px'} />
          +1122334455
        </Flex>
      </Flex>
      <Divider
        borderColor={'white'}
      />

    </VStack>
  )
}

