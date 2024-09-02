import { Box, Button, ListItem, Popover, PopoverBody, PopoverContent, PopoverTrigger, UnorderedList } from "@chakra-ui/react"
import { IoIosArrowDown } from "react-icons/io";
import { navItem } from "./nav-item"

export const DesktopNavbar = () => {
  return (
    <UnorderedList
      display={'flex'}
      alignItems={'center'}
      styleType={'none'}
      gap={8}
      color={'white'}
    >
      {
        navItem.map(item => (
          <ListItem
            key={item.label}
          >
            <Popover trigger={'hover'} placement={'bottom-start'} >
              <PopoverTrigger>
                <Button
                  textTransform={'uppercase'}
                  fontWeight={500}
                  as={'a'}
                  cursor={'pointer'}
                  variant={'ghost'}
                  color={'white'}
                  rounded={'none'}
                  _hover={{
                    background: 'teal.500'
                  }}
                  rightIcon={item.children && <IoIosArrowDown />}
                >
                  {item.label}
                </Button>
              </PopoverTrigger>
              {
                item.children && (
                  <PopoverContent
                    rounded={'none'}
                    border={'none'}
                  >
                    {
                      item.children.map(item => (
                        <PopoverBody
                          key={item.label}
                          p={0}
                          m={0}
                          color={'black'}
                        >
                          <Box
                            as={'a'}
                            href={item.href}
                            role={'group'}
                            display={'block'}
                            p={4}
                            _hover={{
                              bg: 'teal.500',
                              color: 'white'
                            }}
                          >
                            {item.label}
                          </Box>
                        </PopoverBody>
                      ))
                    }
                  </PopoverContent>
                )
              }
            </Popover>
          </ListItem>
        ))
      }
    </UnorderedList>
  )
}

