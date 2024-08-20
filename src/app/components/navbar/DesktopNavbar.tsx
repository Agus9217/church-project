import { ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { navItem } from './nav-item'

export const DesktopNavbar = () => {
  return (
    <UnorderedList
      styleType={'none'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'30px'}
      color={'white'}
    >
      {
        navItem.map(item => (
          <ListItem key={item.label}>
            {item.label}
          </ListItem>
        ))
      }
    </UnorderedList>
  )
}

