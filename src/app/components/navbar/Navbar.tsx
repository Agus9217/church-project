import { Flex, Divider, Text, VStack } from "@chakra-ui/react"
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

export const Navbar = () => {
  return (
    <VStack
      as={'header'}
      spacing={0}
      w={'100%'}
      minH={'70px'}
      pos={'fixed'}
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
            Seguinos en nuestras redes
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
        <Flex>
          Comunicate: +1122334455
        </Flex>
      </Flex>
      <Divider
        borderColor={'black'}
      />

    </VStack>
  )
}

