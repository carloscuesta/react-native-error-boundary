---
title: FallbackComponent
description: ErrorBoundary, FallbackComponent API and props.
tags:
  - API
  - FallbackComponent
slug: /api/fallbackcomponent
sidebar_position: 2
---

These are the props that the `FallbackComponent` receives:

## Props

| Property   | Type       | Default |
|------------|------------|---------|
| error      | `Error`    |         |
| resetError | `Function` |         |

### `error`

The error object.

### `resetError`

A function to reset the error state. You'll want to call this function to recover from the error state.

```js
resetError(): void
```

## Defaults

This is the default `FallbackComponent` that comes with the library.

<img width="388" alt="React Native Error Boundary default fallback component" src="https://user-images.githubusercontent.com/7629661/185806328-39f4000d-376e-4fb8-a8b0-36af69a5f119.jpg" />

