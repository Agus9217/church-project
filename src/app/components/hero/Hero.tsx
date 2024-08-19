import { Box } from '@chakra-ui/react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <Box
      borderColor={'red'}
      borderWidth={'thin'}
      maxW={'100%'}
      w={'100%'}
      h={'1200px'}
    >
      <Image
        fill={true}
        src={'/hero-image.jpg'}
        alt='Imagen de la iglesia'
        objectFit='cover'
      />

    </Box>
  )
}
