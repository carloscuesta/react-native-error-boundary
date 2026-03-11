import reactNativeConfig from '@react-native/eslint-config/flat'
import importPlugin from 'eslint-plugin-import'

export default [
  ...reactNativeConfig,
  importPlugin.flatConfigs.errors,
  importPlugin.flatConfigs['react-native'],
  importPlugin.flatConfigs.typescript,
  {
    settings: {
      react: {
        version: '19.0.0',
      },
      'import/ignore': ['react-native'],
      'import/resolver': {
        typescript: true,
      },
    },
    rules: {
      // eslint-plugin-eslint-comments v3 is incompatible with ESLint v10
      // (uses removed context.getSourceCode API). Disable until the plugin is updated.
      'eslint-comments/no-aggregating-enable': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
      'eslint-comments/no-unused-disable': 'off',
      'eslint-comments/no-unused-enable': 'off',
      // eslint-plugin-react v7 has rules that use removed ESLint v10 APIs
      // (context.getFilename / context.getSourceCode). Disable until updated.
      'react/jsx-no-undef': 'off',
      'react/no-did-mount-set-state': 'off',
      'react/no-did-update-set-state': 'off',
      'react/no-string-refs': 'off',
      // eslint-plugin-react-native v5 uses context.getSourceCode removed in ESLint v10.
      // Disable until updated.
      'react-native/no-inline-styles': 'off',
    },
  },
]
