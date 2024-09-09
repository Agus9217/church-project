import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Img,
  Stack,
} from "@chakra-ui/react";

export const Ministerios = () => {
  return (
    <Stack spacing={0} direction={"column"} h={"100dvh"}>
      <Flex
        borderWidth={"thin"}
        borderColor={"red"}
        flexGrow={1}
        alignItems={"center"}
        justifyContent={"center"}
        gap={8}
      >
        <Flex
          maxW={600}
          justifyContent={"center"}
          alignItems={"center"}
          flexGrow={1}
          borderWidth={"thin"}
          borderColor={"red"}
        >
          <Img src={"./iglesia-3.jpg"} />
        </Flex>
        <Flex
          flexGrow={1}
          maxW={500}
          alignItems={"center"}
          borderWidth={"thin"}
          borderColor={"blue"}
        >
          <Accordion allowToggle w={'100%'} colorScheme={'teal'}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </Stack>
  );
};
