import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { IoMenuOutline } from "react-icons/io5";

export const MobileNavbar = () => {
  return (
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
      >
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}

