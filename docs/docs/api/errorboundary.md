---
title: ErrorBoundary
description: ErrorBoundary component API and props.
tags:
  - API
  - ErrorBoundary
slug: /api/errorboundary
sidebar_position: 2
---

These are the props that the `ErrorBoundary` component accepts:

| Property          | Type              | Required | Default             | Description                        |
|-------------------|-------------------|----------|---------------------|------------------------------------|
| children          | `React.Children`  | `true`   |                     | Components that may throw an error |
| FallbackComponent | `React.Component` | `false`  | `FallbackComponent` | UI rendered when there's an error  |
| onError           | `Function`        | `false`  |                     | Function for logging the error     |
