# FAQ

## Why choose `react-native-error-boundary` over [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary)?

The main difference is that `react-native-error-boundary` targets React Native. It provides a default `FallbackComponent` that uses React Native components underneath, so this is **not compatible with React** on the web. Additionally, the API for `react-error-boundary` is somewhat different, having many more options than `react-native-error-boundary` while also seemingly being compatible with React Native.

At the end of the day, you should pick the option you prefer based on your needs and on the API that each library provides.

## Why I see a red error screen on development ?

If you see a red error error screen while you're on Development, that's normal. It's the way `react-native` showcases you the error you've got. To see the `ErrorBoundary` component just dismiss the screen or press the `Esc` key.
