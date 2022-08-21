---
title: ErrorBoundary
description: ErrorBoundary component API and props.
tags:
  - API
  - ErrorBoundary
slug: /api/errorboundary
sidebar_position: 2
---

These are the props that you can pass to the `ErrorBoundary` component:

## Props

| Property            | Type              | Required | Default             |
|---------------------|-------------------|----------|---------------------|
| `Children`          | `React.Children`  | `true`   |                     |
| `FallbackComponent` | `React.Component` | `false`  | `FallbackComponent` |
| `onError`           | `Function`        | `false`  |                     |

### `Children`

Any children that can throw an error. 

### [`FallbackComponent`](./fallbackcomponent.md)

The fallback component that will be rendered after catching an error.
By default the library comes with a built-in component.

### `onError`

A function that receives two arguments:

- `error`: The error catched by the component.
- `stackTrace`: The stacktrace of the error.

```js
onError(error: Error, stackTrace: string): void
```
