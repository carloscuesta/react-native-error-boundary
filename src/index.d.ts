declare module 'react-native-error-boundary' {
  import React from 'react';

  export type ErrorBoundaryProps = {
    children: React.ReactNode;
    FallbackComponent?: React.ComponentType<{ error: Error; resetError: () => void }>;
    onError?: (error: Error, stackTrace: string) => void;
  };

  export default class ErrorBoundary extends React.Component<ErrorBoundaryProps> {}
}
