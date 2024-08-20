import { Box, Button, Flex, Heading, Img, Text } from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Box
      position={'relative'}
      maxW={'100%'}
      w={'100%'}
      h={{ base: '500px', md: '600px', lg: '645px', '2xl': '1200px' }}
    >
      <Img
        w={'100%'}
        height={'100%'}
        src={'/hero-image.jpg'}
        alt='Imagen de la iglesia'
        objectFit={'cover'}
        filter={'brightness(50%)'}
      />
      <Box
        maxW={'90%'}
        w={'100%'}
        position={'absolute'}
        top={'50%'}
        transform={'translate(-50%, -50%)'}
        left={'50%'}
        color={'white'}
        textAlign={{ base: 'center', lg: 'left' }}
      >
        <Text
          as={'h1'}
          textTransform={'uppercase'}
          letterSpacing={2}
          fontSize={{ base: 'md', md: 'xl' }}
          textShadow={'lg'}
        >
          Iglesia Cristiana en Barrio Nuevo
        </Text>
        <Heading
          as={'h2'}
          py={3}
          fontSize={{ base: '3xl', md: '5xl', lg: '6xl', xl: '7xl' }}
          textShadow={'lg'}
          maxW={{ base: '100%', lg: '70%', xl: '60%', '2xl': '50%' }}
          w={'100%'}
        >
          Bienvenidos a nuestra Iglesia visitanos, se parte.
        </Heading>
        <Flex
          mt={6}
          gap={'15px'}
          justifyContent={{ base: 'center', lg: 'start' }}
          alignItems={'center'}
        >
          <Button
            colorScheme={'blue'}
            rounded={'none'}
            size={{ base: 'sm', md: 'md' }}
          >
            Nuestra Iglesia
          </Button>
          <Button
            colorScheme={'blue'}
            rounded={'none'}
            size={{ base: 'sm', md: 'md' }}

          >
            Visitanos
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
