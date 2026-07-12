import React from 'react'
import { Text, View } from 'react-native'
import { render, screen, fireEvent } from '@testing-library/react-native'

import moduleIndex from '../index'
import ErrorBoundary from '../ErrorBoundary'

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: ({ children }: { children: React.Children }) => children,
}))

describe('ErrorBoundary', () => {
  let consoleErrorSpy: jest.SpyInstance

  const ComponentWithError = () => (
    <View>
      {/*  @ts-expect-error - We are rendering an error to trigger the ErrorBoundary component, even though it's not a valid React children. */}
      {new Error('This is a test error!')}
    </View>
  )

  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(jest.fn())
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
    it('should render the children', async () => {
      const result = await render(
        <ErrorBoundary>
          <Text>Hey!</Text>
        </ErrorBoundary>,
      )

      expect(result).toMatchInlineSnapshot(`
        <Text>
          Hey!
        </Text>
      `)
    })
  })

  describe('when there is an error', () => {
    describe('when FallbackComponent is not defined as a prop', () => {
      it('should catch the error and render the default FallbackComponent', async () => {
        const result = await render(
          <ErrorBoundary>
            <ComponentWithError />
          </ErrorBoundary>,
        )

        expect(result).toMatchSnapshot()
      })
    })

    describe('when FallbackComponent is defined as a prop', () => {
      it('should catch the error and render the props.FallbackComponent', async () => {
        const fallbackComponent = 'FallbackComponent'

        await render(
          <ErrorBoundary
            FallbackComponent={() => <Text>{fallbackComponent}</Text>}
          >
            <ComponentWithError />
          </ErrorBoundary>,
        )

        expect(screen.getByText(fallbackComponent)).toBeOnTheScreen()
      })
    })

    describe('when onError is defined as a prop', () => {
      it('should catch the error and call props.onError', async () => {
        const onError = jest.fn()

        await render(
          <ErrorBoundary onError={onError}>
            <ComponentWithError />
          </ErrorBoundary>,
        )

        expect(onError).toHaveBeenCalledWith(
          expect.any(Error),
          expect.any(String),
        )
      })
    })

    describe('when FallbackComponent resetError prop is called', () => {
      it('should clear the error state', async () => {
        const { rerender } = await render(<ComponentWithError />, {
          wrapper: ErrorBoundary,
        })

        const tryAgainButton = screen.getByText('Try again')
        const children = 'Children'

        expect(tryAgainButton).toBeOnTheScreen()

        await rerender(<Text>{children}</Text>)

        fireEvent.press(tryAgainButton)

        expect(await screen.findByText(children)).toBeOnTheScreen()
        expect(tryAgainButton).not.toBeOnTheScreen()
      })
    })
  })
})
