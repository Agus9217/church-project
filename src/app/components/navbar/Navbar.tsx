import { Button, Flex, Img, Show, Stack } from '@chakra-ui/react'
import { DesktopNavbar } from './DesktopNavbar'
import { MobileNavbar } from './MobileNavbar'

export const Navbar = () => {
  return (
    <Stack
      as={'header'}
      py={2}
      position={'fixed'}
      spacing={0}
      w={'100%'}
      minH={{ base: '60px', lg: '80px' }}
      direction={'row'}
      zIndex={1000}
    >
      <Flex
        maxW={'300px'}
        flexGrow={1}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Img
          src={'/worship-church.svg'}
          width={{ base: '60px' }}
          height={{ base: '60px' }}
          alt='Logo iglesia'
          fill={'white'}
        />
      </Flex>
      <Flex
        as={'nav'}
        flexGrow={2}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Show
          above={'lg'}
        >
          <DesktopNavbar />
        </Show>
      </Flex>
      <Flex
        maxW={'300px'}
        flexGrow={1}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Show
          above={'lg'}
        >
          <Button
            colorScheme='blue'
            rounded={'none'}
          >
            Soy nuevo
          </Button>
        </Show>
        <Show
          below={'lg'}
        >
          <MobileNavbar />
        </Show>
      </Flex>
    </Stack>
  )
}

