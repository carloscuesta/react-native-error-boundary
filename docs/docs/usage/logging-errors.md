---
title: Logging Errors
slug: /usage/logging-errors
sidebar_position: 2
---

You can **log** the error by providing an `onError` property to the component.

Import the `ErrorBoundary` component:

```js
import ErrorBoundary from 'react-native-error-boundary'
```

Then, wrap it around any component that could throw an error using the `onError` callback function:

```jsx
const errorHandler = (error: Error, stackTrace: string) => {
  /* Log the error to an error reporting service */
}

const App = () => (
  <ErrorBoundary onError={errorHandler}>
    <ChildrenThatCouldThrowEror />
  </ErrorBoundary>
)
```

This `onError` function can be useful to log the errors that happen in your application to an error monitoring service such as: _[Bugsnag](https://www.bugsnag.com/)_, _[Sentry](https://sentry.io/)_ 🐛
