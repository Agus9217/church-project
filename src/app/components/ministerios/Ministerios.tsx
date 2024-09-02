import { Flex, Stack } from "@chakra-ui/react"

export const Ministerios = () => {
  return (
    <Stack
    spacing={0}
    direction={'column'}
    h={'100dvh'}
    >
      <Flex
        borderWidth={'thin'}
        borderColor={'red'}
        flexGrow={1}
      ></Flex>
      <Flex
        borderWidth={'thin'}
        borderColor={'blue'}
        flexGrow={1}
      ></Flex>
    </Stack>
  )
}
