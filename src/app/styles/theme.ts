import { extendTheme } from "@chakra-ui/react";
import '@fontsource-variable/montserrat';
import '@fontsource-variable/noto-serif';

export const themeApp = extendTheme({
  fonts: {
    body: `'Montserrat Variable', sans-serif`,
    heading: `'Montserrat Variable', sans-serif`,
    notoserif: `'Noto Serif Variable', serif`,
  },


})