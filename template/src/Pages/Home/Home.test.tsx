import React from 'react'
import { render } from '@testing-library/react'
import { Providers } from 'Application/Providers'
import { Home } from './'

test('renders learn react link', () => {
  const { getByText } = render(
    <Providers>
      <Home />
    </Providers>
  )

  expect(getByText(/learn/i)).toBeInTheDocument()
})
