import { ListItem, UnorderedList } from "@chakra-ui/react"
import { navItem } from "./nav-item"

export const DesktopNavbar = () => {
  return (
    <UnorderedList
      display={'flex'}
      alignItems={'center'}
      styleType={'none'}
      gap={8}
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

