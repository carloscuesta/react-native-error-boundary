import React from 'react'
import { Text, View } from 'react-native'
import renderer, { ReactTestInstance } from 'react-test-renderer'

import moduleIndex from '../index'
import ErrorBoundary from '../ErrorBoundary'

describe('ErrorBoundary', () => {
  let consoleErrorSpy: jest.SpyInstance
  let errorMock: Error

  const ComponentWithError = (props: { error: Error }) => (
    <View>
      {/*  @ts-expect-error - We are rendering an error to trigger the ErrorBoundary component, even though it's not a valid React children. */}
      {props.error}
    </View>
  )

  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(jest.fn())
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

  describe('when there are no errors', () => {
    it('should render the children', () => {
      const wrapper = renderer.create(
        <ErrorBoundary>
          <Text>Hey!</Text>
        </ErrorBoundary>
      )

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when there is an error', () => {
    describe('when FallbackComponent is not defined as a prop', () => {
      it('should catch the error and render the default FallbackComponent', () => {
        const wrapper = renderer.create(
          <ErrorBoundary>
            <ComponentWithError error={errorMock} />
          </ErrorBoundary>
        )

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when FallbackComponent is defined as a prop', () => {
      it('should catch the error and render the props.FallbackComponent', () => {
        const FallbackComponent = () => <Text>Error!</Text>
        const wrapper = renderer.create(
          <ErrorBoundary FallbackComponent={FallbackComponent}>
            <ComponentWithError error={errorMock} />
          </ErrorBoundary>
        )

        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when onError is defined as a prop', () => {
      it('should catch the error and call props.onError', () => {
        const onError = jest.fn()

        renderer.create(
          <ErrorBoundary onError={onError}>
            <ComponentWithError error={errorMock} />
          </ErrorBoundary>
        )

        expect(onError).toHaveBeenCalledWith(
          expect.any(Error),
          expect.any(String)
        )
      })
    })

    describe('when FallbackComponent resetError prop is called', () => {
      it('should clear the error state', () => {
        const wrapper = renderer.create(
          <ErrorBoundary>
            <Text>No errors!</Text>
          </ErrorBoundary>
        )

        const instance = wrapper.getInstance() as ReactTestInstance['instance']

        instance.setState({ error: errorMock })
        instance.resetError()

        expect(instance.state.error).toBeNull()
      })
    })
  })
})
