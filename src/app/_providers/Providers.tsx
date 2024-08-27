'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import { themeApp } from '../styles/theme'

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={themeApp}>
      <Global
        styles={
          css`
            html: {
              scroll-behavior: smooth
            }
            `
        }
      />
      {children}
    </ChakraProvider>
  )
}

