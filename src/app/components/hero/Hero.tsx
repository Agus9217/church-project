'use client'

import { Box, Button, Img, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

export const Hero = () => {

  const MotionComponent = motion(Box)

  return (
    <Stack
      position={'relative'}
    >
      <Img
        src='/hero-image.jpg' 
        w={'100%'}
        h={'100dvh'}
        objectFit={'cover'}
        filter={'brightness(50%)'}
      />
      <Box
        position={'absolute'}
        left={'50%'}
        top={'50%'}
        transform={'translate(-50%, -50%)'}
        color={'white'}
        textAlign={'center'}
      >
        <MotionComponent
          as={Text}
          fontFamily={'notoserif'}
          fontWeight={400}
          fontStyle={'italic'}
          fontSize={'1.4rem'}
          textShadow={'lg'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'linear' }}
          color={'orange.200'}
        >
          Bienvenidos
        </MotionComponent>
        <MotionComponent
          as={'h1'}
          fontSize={'5.6rem'}
          textTransform={'uppercase'}
          fontWeight={500}
          letterSpacing={9}
          textShadow={'lg'}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'linear' }}
        >
          Iglesia Cristiana en Barrio Nuevo
        </MotionComponent>
        <MotionComponent
          as={Text}
          textAlign={'center'}
          maxW={'60%'}
          fontSize={'1.2rem'}
          textShadow={'lg'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'linear' }}
          mx={'auto'}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error laborum quidem eveniet velit. Ex est quos, fugit illum officiis molestiae labore assumenda, dolores eos harum hic corporis ipsum reprehenderit minus!
        </MotionComponent>
        <MotionComponent
          my={6}
          as={Button}
          colorScheme={'teal'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'linear' }}
        >
          Ver más
        </MotionComponent>
      </Box>
    </Stack>
  )
}
