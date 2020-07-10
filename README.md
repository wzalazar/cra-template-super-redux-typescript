# cra-template-super-redux-typescript

Redux+TS template for [Create React App](https://github.com/facebook/create-react-app).


## Guide

- [Install](#install)
- [Continuous integration](#continuous-integration)

#### Install

To use this template, add `--template super-redux-typescript` when creating a new app.

For example:

```sh
npx create-react-app my-app --template super-redux-typescript

# or

yarn create react-app my-app --template super-redux-typescript
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

#### Continuous integration

The project will need you to add these secrets in the configuration of your project in order to create releases with [semantic-release](https://github.com/semantic-release/semantic-release) and [create a report coverage](https://github.com/codecov/codecov-node).

- [GH_TOKEN](https://github.com/semantic-release/github)
- [CODECOV_TOKEN](https://codecov.io/)