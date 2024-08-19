'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import React from 'react'

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider>
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

