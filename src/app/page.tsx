import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Hero } from "./components";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stack
        py={'8rem'}
        mx={'auto'}
        maxW={'1920px'}
        borderColor={'red'}
        borderWidth={'thin'}
        direction={'row'}
        spacing={0}
      >
        <Box
          position={'relative'}
          borderColor={'blue'}
          borderWidth={'thin'}
          w={'50%'}
        >
          <Box
            borderColor={'green'}
            background={'green'}
            borderWidth={'thin'}
            w={'500px'}
            h={'500px'}
          ></Box>
          <Box
            position={'absolute'}
            background={'red'}
            borderColor={'red'}
            borderWidth={'thin'}
            top={'25rem'}
            left={'20rem'}
            w={'500px'}
            h={'500px'}
          ></Box>
          <Box
            mt={'15rem'}
            borderColor={'blue'}
            background={'blue'}
            borderWidth={'thin'}
            w={'500px'}
            h={'500px'}
          ></Box>

        </Box>
        <Flex
          flexDirection={'column'}
          borderColor={'cyan'}
          borderWidth={'thin'}
          justifyContent={'center'}
          w={'50%'}
          px={'2rem'}
        >
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={'semibold'}
            fontSize={{ base: 'xl' }}
          >
            Nuestra Iglesia
          </Text>
          <Heading
            as={'h3'}
            fontSize={'7xl'}
            textTransform={'uppercase'}
            py={'2rem'}
          >
            Iglesia cristiana en Barrio Nuevo
          </Heading>
          <Text
            fontSize={'xl'}
            maxW={'70%'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit aspernatur eius perspiciatis dicta optio itaque commodi? A vel, dolores explicabo laudantium quidem qui suscipit placeat consequuntur. Error, veritatis at?
            Blanditiis illo qui ea fugiat, vel quod consectetur et voluptas nobis quas maiores repellendus dignissimos error in, aspernatur eaque facilis? Soluta facilis sit deleniti consectetur, voluptas quis ipsam optio suscipit?
          </Text>
          <Box
            py={'2rem'}
          >
            <Button
              size={'lg'}
              rounded={'none'}
              colorScheme={'blue'}
            >
              Ver más
            </Button>
          </Box>
        </Flex>
      </Stack>
    </>
  );
}
