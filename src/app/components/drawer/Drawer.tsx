'use client'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, IconButton, Text, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { IoMenuOutline } from "react-icons/io5";


export const DrawerNav = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button
        as={IconButton}
        icon={<IoMenuOutline size={'40px'} />}
        ref={btnRef}
        colorScheme='whiteAlpha'
        variant={'ghost'}
        color={'white'}
        onClick={onOpen}
      />

      <Drawer
        size={'md'}
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        blockScrollOnMount={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box
              pt={'5rem'}

            >
              <Text
                fontSize={'16px'}
                fontStyle={'italic'}
                fontFamily={'notoserif'}
                py={3}
                color={'teal'}
              >
                Donde encontrarnos
              </Text>
              <Heading
              >
                Visitanos te esperamos
              </Heading>
            </Box>

          </DrawerHeader>
          <DrawerBody>
            <Box
              py={4}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.798629903111!2d-58.67606492263263!3d-34.71025866313553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc1587ef0a8e3%3A0x94c8a6f9bc8a8d82!2sIglesia%20Evang%C3%A9lica%20de%20Barrio%20Nuevo!5e0!3m2!1ses!2sar!4v1724950769959!5m2!1ses!2sar"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

