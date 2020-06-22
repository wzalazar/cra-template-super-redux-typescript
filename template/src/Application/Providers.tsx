import React, { FC, ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from './Store'
import { Theme } from './Theme'

type Props = {
  children: ReactNode
}

export const Providers: FC<Props> = ({ children }) => (
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
)
