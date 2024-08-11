import tseslint from 'typescript-eslint'
import _globals from 'globals'

export default tseslint.config(
    {
        languageOptions: {
            globals: _globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    }
)