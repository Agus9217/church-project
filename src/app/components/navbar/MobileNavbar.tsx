import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react'
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { navItem } from './nav-item';
import { useRef } from 'react';

export const MobileNavbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Menu
        autoSelect={false}
      >
        <MenuButton
          as={IconButton}
          icon={<IoMenuOutline size={'30px'} />}
          variant={'ghost'}
          colorScheme={'white'}
        />
        <MenuList
          color={'black'}
          rounded={'none'}
          border={0}
        >
          {
            navItem.map(item => (
              <MenuItem
                key={item.label}
              >
                <Button
                  ref={btnRef}
                  onClick={item.children && onOpen}
                  as={'a'}
                  fontWeight={500}
                  border={'none'}
                  bg={'none'}
                  rightIcon={item.children && <IoIosArrowDown />}
                >
                  {item.label}

                </Button>

              </MenuItem>
            ))
          }
        </MenuList>
      </Menu>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex
              mt={'5rem'}
              flexDirection={'column'}
              alignItems={'start'}
            >
              {
                navItem.map(item => (
                  item.children?.map(item => (
                    <Button
                      key={item.label}
                      as={'a'}
                      border={'none'}
                      bg={'none'}
                      fontWeight={500}
                      href={item.href}
                    >
                      {item.label}
                    </Button>
                  ))
                ))
              }
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

