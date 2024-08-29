'use client'

import { Box, Flex, HStack, Show } from "@chakra-ui/react"
import { DesktopNavbar } from "./DesktopNavbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { DrawerNav } from "../drawer/Drawer";

export const Navbar = () => {

  const MotionComponent = motion(Box)

  return (
    <MotionComponent
      justifyContent={'space-between'}
      alignItems={'center'}
      as={'header'}
      display={'flex'}
      flexDirection={'row'}
      w={'100%'}
      minH={'60px'}
      pos={'fixed'}
      color={'white'}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'linear' }}
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
        <Show
          above={'xl'}
        >
          <DesktopNavbar />
        </Show>
      </Flex>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        maxW={'150px'}
        flexGrow={1}
      >
        <DrawerNav />
      </Flex>

    </MotionComponent>
  )
}

