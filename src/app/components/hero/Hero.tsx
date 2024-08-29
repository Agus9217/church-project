'use client'

import { Box, Button, Img, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const Hero = () => {

  const MotionComponent = motion(Box)

  return (
    <Stack
      position={'relative'}
    >
      <Img
        src='/hero-image.jpg'
        w={'100%'}
        h={{ base: '795px', xl: '100dvh' }}
        objectFit={'cover'}
        filter={'brightness(45%)'}
      />
      <Box
        position={'absolute'}
        left={'50%'}
        top={'50%'}
        transform={'translate(-50%, -50%)'}
        color={'white'}
        textAlign={'center'}
        maxW={'90%'}
        w={'100%'}
      >
        <MotionComponent
          as={Text}
          fontFamily={'notoserif'}
          fontWeight={400}
          fontStyle={'italic'}
          fontSize={'1.4rem'}
          textShadow={'xl'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'linear' }}
          color={'orange.200'}
        >
          Bienvenidos
        </MotionComponent>
        <MotionComponent
          as={'h1'}
          fontSize={{ base: '2rem', lg: '4rem', xl: '5.6rem' }}
          textTransform={'uppercase'}
          fontWeight={500}
          letterSpacing={9}
          textShadow={'xl'}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'linear' }}
          py={6}
        >
          Iglesia Cristiana en Barrio Nuevo
        </MotionComponent>
        <MotionComponent
          as={Text}
          textAlign={'center'}
          maxW={'60%'}
          fontSize={{ base: '15px', xl: '19px' }}
          textShadow={'xl'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'linear' }}
          mx={'auto'}
          display={{ base: 'none', md: 'block' }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error laborum quidem eveniet velit. Ex est quos, fugit illum officiis molestiae labore assumenda, dolores eos harum hic corporis ipsum reprehenderit minus!
        </MotionComponent>
        <MotionComponent
          my={6}
          as={Button}
          size={'lg'}
          colorScheme={'teal'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'linear' }}
          rounded={'none'}
        >
          Ver más
        </MotionComponent>
      </Box>
    </Stack>
  )
}
