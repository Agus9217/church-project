import { Box, Img } from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Box
      borderColor={'red'}
      borderWidth={'thin'}
      maxW={'100%'}
      w={'100%'}
      h={{ base: '500px', md: '600px', lg: '645px', '2xl': '900px' }}
    >
      <Img
        w={'100%'}
        height={'100%'}
        src={'/hero-image.jpg'}
        alt='Imagen de la iglesia'
        objectFit={'cover'}
      />

    </Box>
  )
}
