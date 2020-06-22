import React from 'react'
import { Counter } from 'Features/counter/Counter'

import { Anchor } from 'Components/Anchor'
import { Logo } from 'Components/Logo'
import { Layout } from 'Components/Layout'

export const Home = () => (
  <Layout>
    <Logo />
    <Counter />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <span>
      <span>Learn </span>
      <Anchor href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        React
      </Anchor>
      <span>, </span>
      <Anchor href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
        Redux
      </Anchor>
      <span>, </span>
      <Anchor href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
        Redux Toolkit
      </Anchor>
      ,<span> and </span>
      <Anchor href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
        React Redux
      </Anchor>
    </span>
  </Layout>
)
