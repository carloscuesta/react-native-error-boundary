---
title: FAQ
description: react-native-error-boundary frequently asked questions.
keywords: [react-native-error-boundary, faq]
tags:
  - FAQ
slug: /faq
sidebar_position: 5
---
### Why do you need error boundaries?

As of **React 16**, errors that were **not caught** by any **error boundary** will **result** in **unmounting** of the **whole** React **component tree** 😱.

[Read more about the dangers](https://carloscuesta.me/blog/managing-react-native-crashes-with-error-boundaries#why-you-should-use-them-) of this.

### Why choose `react-native-error-boundary` over [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary)?

The main difference is that `react-native-error-boundary` targets React Native. It provides a default `FallbackComponent` that uses React Native components underneath, so this is **not compatible with React** on the web. Additionally, the API for `react-error-boundary` is somewhat different, having many more options than `react-native-error-boundary` while also seemingly being compatible with React Native.

At the end of the day, you should pick the option you prefer based on your needs and on the API that each library provides.

### Why I see a red error screen on development?

If you see a red error error screen while you're on Development, that's normal. It's the way `react-native` showcases you the error you've got. To see the `ErrorBoundary` component just dismiss the screen or press the `Esc` key.

### How do I test the ErrorBoundary component on development?

That's a piece of cake :cake:! Follow the [Expo example](https://snack.expo.io/@carloscuesta/react-native-error-boundary) that is provided [on the repository](https://github.com/carloscuesta/react-native-error-boundary#examples).