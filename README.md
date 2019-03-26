# react-native-error-boundary

[![Travis Build Status](https://img.shields.io/travis/com/carloscuesta/react-native-error-boundary.svg?style=flat-square)](https://travis-ci.com/carloscuesta/react-native-error-boundary)
[![Codecov](https://img.shields.io/codecov/c/github/carloscuesta/react-native-error-boundary.svg?style=flat-square)](https://codecov.io/gh/carloscuesta/react-native-error-boundary)
[![Codeclimate](https://img.shields.io/codeclimate/maintainability/carloscuesta/react-native-error-boundary.svg?style=flat-square)](https://codeclimate.com/github/carloscuesta/react-native-error-boundary)
[![Npm Version](https://img.shields.io/npm/v/react-native-error-boundary.svg?style=flat-square)](https://www.npmjs.com/package/react-native-error-boundary)
[![Npm Downloads](https://img.shields.io/npm/dt/react-native-error-boundary.svg?style=flat-square)](https://www.npmjs.com/package/react-native-error-boundary)

> A simple and reusable React-Native error boundary component 🐛

## Install

```bash
$ yarn add react-native-error-boundary
```

## Usage

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

## Demo

<img
  src='https://user-images.githubusercontent.com/7629661/52532748-d8758400-2d29-11e9-80a0-15182517271c.gif'
  alt='react-native-error-boundary'
  width='358px'
/>
