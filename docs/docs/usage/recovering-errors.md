---
title: Recovering Errors
slug: /usage/recovering-errors
sidebar_position: 1
---
import ExpoSnack from '../../src/components/ExpoSnack';

Import the `ErrorBoundary` component:

```js
import ErrorBoundary from 'react-native-error-boundary'
```

Then, wrap it around any component that could throw an error:

```jsx
const App = () => (
  <ErrorBoundary>
    <ChildrenThatCouldThrowEror />
  </ErrorBoundary>
)
```

If any of the children of the `ErrorBoundary` throws an error, a fallback screen will be rendered, to communicate the user that an error happened.

# Demo

<ExpoSnack id="@carloscuesta/react-native-error-boundary" />
