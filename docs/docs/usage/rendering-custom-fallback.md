---
title: Rendering a Fallback Component
slug: /usage/rendering-a-custom-fallback-ui
sidebar_position: 3
---
import ExpoSnack from '../../src/components/ExpoSnack';

You can **customise** the screen showed to the user once an error happens with the `FallbackComponent` property.

Import the `ErrorBoundary` component:

```js
import ErrorBoundary from 'react-native-error-boundary'
```

Then, wrap it around any component that could throw an error providing the `FallbackComponent` property:

```jsx
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

When using this property, you're in fully in control over the error experience for the users.

# Demo

<ExpoSnack id="@carloscuesta/react-native-error-boundary-fallbackcomponent" />