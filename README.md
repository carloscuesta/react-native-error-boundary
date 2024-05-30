# react-native-error-boundary

[![Build Status](https://img.shields.io/github/actions/workflow/status/carloscuesta/react-native-error-boundary/ci.yml?branch=master&style=flat-square)](https://github.com/carloscuesta/react-native-error-boundary/actions?query=workflow%3ACI+branch%3Amaster)
[![Codecov](https://img.shields.io/codecov/c/github/carloscuesta/react-native-error-boundary.svg?style=flat-square)](https://codecov.io/gh/carloscuesta/react-native-error-boundary)
[![Npm Version](https://img.shields.io/npm/v/react-native-error-boundary.svg?style=flat-square)](https://www.npmjs.com/package/react-native-error-boundary)
[![Npm Downloads](https://img.shields.io/npm/dt/react-native-error-boundary.svg?style=flat-square)](https://www.npmjs.com/package/react-native-error-boundary)

> A simple and reusable React-Native [error boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) component 🐛

## Install

```bash
yarn add react-native-error-boundary
```

## Documentation

- [Installation](https://react-native-error-boundary.js.org/install)
- [Usage](https://react-native-error-boundary.js.org/usage/recovering-errors)
  - [Recovering Errors](https://react-native-error-boundary.js.org/usage/recovering-errors)
  - [Logging Errors](https://react-native-error-boundary.js.org/usage/logging-errors)
  - [Rendering a Fallback Component](https://react-native-error-boundary.js.org/usage/rendering-a-custom-fallback-ui)
- [API](https://react-native-error-boundary.js.org/api/errorboundary)
  - [`ErrorBoundary`](https://react-native-error-boundary.js.org/api/errorboundary)
  - [`FallbackComponent`](https://react-native-error-boundary.js.org/api/fallbackcomponent)
- [FAQ](https://react-native-error-boundary.js.org/faq)

## API

### [`ErrorBoundary`](https://react-native-error-boundary.js.org/api/errorboundary)

These are the props that you can pass to the `ErrorBoundary` component:

| Property            | Type              | Required | Default             |
|---------------------|-------------------|----------|---------------------|
| `Children`          | `React.Children`  | `true`   |                     |
| `FallbackComponent` | `React.Component` | `false`  | `FallbackComponent` |
| `onError`           | `Function`        | `false`  |                     |

#### `Children`

Any children that can throw an error. 

#### [`FallbackComponent`](https://react-native-error-boundary.js.org/api/fallbackcomponent)

The fallback component that will be rendered after catching an error.
By default the library comes with a built-in component.

#### `onError`

A function that receives two arguments:

- `error`: The error catched by the component.
- `stackTrace`: The stacktrace of the error.

```js
onError(error: Error, stackTrace: string): void
```

### [`FallbackComponent`](https://react-native-error-boundary.js.org/api/fallbackcomponent)

These are the props that the `FallbackComponent` receives:

| Property   | Type       | Default |
|------------|------------|---------|
| error      | `Error`    |         |
| resetError | `Function` |         |

#### `error`

The error object.

#### `resetError`

A function to reset the error state. You'll want to call this function to recover from the error state.

```js
resetError(): void
```

## Demo

<img
  src='https://user-images.githubusercontent.com/7629661/111866027-bc158e00-896a-11eb-8140-cfdc5d19527c.gif'
  alt='react-native-error-boundary'
  width='354px'
/>
