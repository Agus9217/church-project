import { Button, Flex, Show, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import { DesktopNavbar } from './DesktopNavbar'
import { MobileNavbar } from './MobileNavbar'

export const Navbar = () => {
  return (
    <Stack
      as={'header'}
      spacing={0}
      w={'100%'}
      minH={'60px'}
      direction={'row'}
    >
      <Flex
        maxW={'300px'}
        flexGrow={1}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Image
          src={'/worship-church-logo.png'}
          width={50}
          height={50}
          alt='Logo iglesia'
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
            colorScheme='yellow'
            variant={'outline'}
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

