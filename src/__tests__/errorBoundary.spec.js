import React from 'react'
import { Text, View } from 'react-native'
import renderer from 'react-test-renderer'

import moduleIndex from '../index'
import ErrorBoundary from '../ErrorBoundary'

describe('ErrorBoundary', () => {
  let consoleErrorSpy
  let errorMock

  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    errorMock = new Error('This is a test error!')
  })

  afterAll(() => {
    consoleErrorSpy.mockRestore()
  })

  describe('Module index', () => {
    it('should default export ErrorBoundary', () => {
      expect(moduleIndex).toBeInstanceOf(Function)
    })
  })

  it('should render children when there are no errors', () => {
    const wrapper = renderer.create(
      <ErrorBoundary>
        <Text>Hey!</Text>
      </ErrorBoundary>
    )
    expect(wrapper.getInstance().state.error).toBe(null)
    expect(wrapper).toMatchSnapshot()
  })

  it('should catch errors set the state and render the default FallbackComponent', () => {
    const wrapper = renderer.create(
      <ErrorBoundary>
        <View>{errorMock}</View>
      </ErrorBoundary>
    )
    expect(wrapper.getInstance().state.error).toBeInstanceOf(Error)
    expect(wrapper.getInstance().state.error).not.toBeNull()
    expect(wrapper).toMatchSnapshot()
  })

  it('should catch errors set the state render the props.FallbackComponent and call props.onError', () => {
    const FallbackComponent = () => <Text>Error!</Text>
    const onError = jest.fn()
    const wrapper = renderer.create(
      <ErrorBoundary FallbackComponent={FallbackComponent} onError={onError}>
        <View>{errorMock}</View>
      </ErrorBoundary>
    )
    expect(wrapper.getInstance().state.error).toBeInstanceOf(Error)
    expect(wrapper.getInstance().state.error).not.toBeNull()
    expect(onError).toHaveBeenCalledWith(expect.any(Error), expect.any(String))
    expect(wrapper).toMatchSnapshot()
  })

  it('should clear state when calling resetError', () => {
    const wrapper = renderer.create(
      <ErrorBoundary>
        <Text>No errors!</Text>
      </ErrorBoundary>
    )
    wrapper.getInstance().setState({ error: errorMock })
    wrapper.getInstance().resetError()
    expect(wrapper.getInstance().state.error).toBeNull()
  })
})
