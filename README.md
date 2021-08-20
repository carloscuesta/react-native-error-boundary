# react-native-error-boundary

[![Build Status](https://img.shields.io/github/workflow/status/carloscuesta/react-native-error-boundary/CI?style=flat-square)](https://github.com/carloscuesta/react-native-error-boundary/actions?query=workflow%3ACI+branch%3Amaster)
[![Codecov](https://img.shields.io/codecov/c/github/carloscuesta/react-native-error-boundary.svg?style=flat-square)](https://codecov.io/gh/carloscuesta/react-native-error-boundary)
[![Npm Version](https://img.shields.io/npm/v/react-native-error-boundary.svg?style=flat-square)](https://www.npmjs.com/package/react-native-error-boundary)
[![Npm Downloads](https://img.shields.io/npm/dt/react-native-error-boundary.svg?style=flat-square)](https://www.npmjs.com/package/react-native-error-boundary)

> A simple and reusable React-Native [error boundary](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries) component 🐛

## Install

```bash
yarn add react-native-error-boundary
```

## Usage

This component catches **[JavaScript errors](https://github.com/carloscuesta/react-native-error-boundary/issues/5#issuecomment-523809153) anywhere in their child component tree**. Native errors are not handled.

Using this component is really simple. First you have to import the `ErrorBoundary`
component. Then, you have to **wrap** it **around any component** that
**could throw** an **error**.

### Basic

```jsx
import ErrorBoundary from 'react-native-error-boundary'

const App = () => (
  <ErrorBoundary>
    <ChildrenThatCouldThrowEror />
  </ErrorBoundary>
)
```

### Logging errors

You can **log the error** by providing an `onError` function to the component.

```jsx
import ErrorBoundary from 'react-native-error-boundary'

const errorHandler = (error: Error, stackTrace: string) => {
  /* Log the error to an error reporting service */
}

const App = () => (
  <ErrorBoundary onError={errorHandler}>
    <ChildrenThatCouldThrowEror />
  </ErrorBoundary>
)
```

### Custom fallback component

You can customize the appearance of the fallback component by providing the `FallbackComponent` prop.

```jsx
import ErrorBoundary from 'react-native-error-boundary'

const CustomFallback = (props: { error: Error, resetError: Function }) => (
  <View>
    <Text>Something happened!</Text>
    <Text>{props.error.toString()}</Text>
    <Button onPress={props.resetError} title={'Try again'} />
  </View>
)

const App = () => (
  <ErrorBoundary FallbackComponent={CustomFallback}>
    <ChildrenThatCouldThrowEror></ChildrenThatCouldThrowEror>
  </ErrorBoundary>
)
```

## API

### `ErrorBoundary`

These are the props that the `ErrorBoundary` component accepts:

| Property          | Type              | Required | Default             | Description                        |
|-------------------|-------------------|----------|---------------------|------------------------------------|
| children          | `React.Children`  | `true`   |                     | Components that may throw an error |
| FallbackComponent | `React.Component` | `false`  | `FallbackComponent` | UI rendered when there's an error  |
| onError           | `Function`        | `false`  |                     | Function for logging the error     |

### `FallbackComponent`

These are the props that the `FallbackComponent` **receives**:

| Property   | Type       | Default | Description                         |
|------------|------------|---------|-------------------------------------|
| error      | `Error`    |         | The thrown error                    |
| resetError | `Function` |         | A function to reset the error state |

## Examples

- [react-native-error-boundary on Expo](https://snack.expo.io/@carloscuesta/react-native-error-boundary)

## Demo

<img
  src='https://user-images.githubusercontent.com/7629661/111866027-bc158e00-896a-11eb-8140-cfdc5d19527c.gif'
  alt='react-native-error-boundary'
  width='354px'
/>

## FAQ

- [Why do you need error boundaries?](FAQ.md#why-do-you-need-error-boundaries)

- [Why choose `react-native-error-boundary` over `react-error-boundary`?](FAQ.md#why-choose-react-native-error-boundary-over-react-error-boundary)

- [Why I see a red error screen on development?](FAQ.md#why-i-see-a-red-error-screen-on-development)

- [How do I test the ErrorBoundary component on development?](FAQ.md#how-do-i-test-the-errorboundary-component-on-development)
