// @flow
import React, { type Node, type ComponentType } from 'react'

import FallbackComponent from './FallbackComponent'

type Props = {
  children: Node,
  FallbackComponent: ComponentType<any>,
  onError?: Function
}

type State = { error: Error | null, hasError: boolean }

class ErrorBoundary extends React.Component<Props, State> {
  state = { error: null, hasError: false }

  static defaultProps = {
    FallbackComponent: FallbackComponent
  }

  static getDerivedStateFromError (error: Error) {
    return { error, hasError: true }
  }

  componentDidCatch (error: Error, info: { componentStack: string }) {
    if (typeof this.props.onError === 'function') {
      this.props.onError.call(this, error, info.componentStack)
    }
  }

  resetError: Function = () => {
    this.setState({ error: null, hasError: false })
  }

  render () {
    const { FallbackComponent } = this.props

    return this.state.hasError
      ? <FallbackComponent
        error={this.state.error}
        resetError={this.resetError}
      />
      : this.props.children
  }
}

export default ErrorBoundary
