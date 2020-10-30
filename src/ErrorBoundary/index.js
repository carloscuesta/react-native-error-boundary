// @flow
import React, { type Node, type ComponentType } from 'react'

import FallbackComponent, { type Props as FallbackComponentProps } from './FallbackComponent'

type Props = {
  children: Node,
  FallbackComponent: ComponentType<FallbackComponentProps>,
  onError?: Function
}

type State = { error: Error | null }

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null }

  static defaultProps: { FallbackComponent: ComponentType<FallbackComponentProps> } = {
    FallbackComponent: FallbackComponent
  }

  static getDerivedStateFromError (error: Error): State {
    return { error }
  }

  componentDidCatch (error: Error, info: { componentStack: string }) {
    if (typeof this.props.onError === 'function') {
      this.props.onError.call(this, error, info.componentStack)
    }
  }

  resetError: Function = () => {
    this.setState({ error: null })
  }

  render (): Node {
    const { FallbackComponent } = this.props

    return this.state.error
      ? <FallbackComponent
          error={this.state.error}
          resetError={this.resetError}
        />
      : this.props.children
  }
}

export default ErrorBoundary
