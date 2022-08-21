---
title: Introduction
description: React 16 introduced a new concept called Error Boundaries. Boundaries introduce a new way to catch JavaScript errors 🐛 in a React project.
slug: /
sidebar_position: 1
---

[React 16](https://github.com/facebook/react/blob/main/CHANGELOG.md#1600-september-26-2017) introduced a new concept called **[Error Boundaries](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries)**. Boundaries introduce a new way to catch **JavaScript errors** 🐛 in a React project.

## Why do you need error boundaries?

Errors that are not caught by any error boundary will result in unmounting of the whole React component tree 😱

## The problem

Unmounting the whole React component tree, means that if you don't catch errors at all the user will see an empty white screen 💥. Most of the time without having any feedback. This is not a great UX ❌, fortunately you can fix this by using Error Boundaries ✅.

![react-native-error-boundary](https://res.cloudinary.com/carloscuesta/image/upload/react-native-error-unmounted-tree.png)

## The solution

Introducing error boundaries in your project 😍

`react-native-error-boundary` catches **[JavaScript errors](https://github.com/carloscuesta/react-native-error-boundary/issues/5#issuecomment-523809153) anywhere in their child component tree**. Native errors are not handled.

Read this blog post to understand what this library can do for you: [Managing React-Native crashes with Error Boundaries](https://carloscuesta.me/blog/managing-react-native-crashes-with-error-boundaries) 👀


