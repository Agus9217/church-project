import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { IoMenuOutline } from "react-icons/io5";
import { navItem } from './nav-item';

export const MobileNavbar = () => {
  return (
    <Menu
      autoSelect={false}
    >
      <MenuButton
        as={IconButton}
        icon={<IoMenuOutline size={'24px'} />}
        variant={'ghost'}
        _hover={{
          style: 'none'
        }}
        _active={{
          style: 'none'
        }}
      />
      <MenuList>
        {
          navItem.map(item => (
            <MenuItem key={item.label}>
              {item.label}
            </MenuItem>
          ))
        }
        <MenuItem>
          Soy nuevo
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

