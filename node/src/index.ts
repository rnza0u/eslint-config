import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import _globals from 'globals'

export default tseslint.config(
    {
        ...eslint.configs.recommended,
        languageOptions: {
            globals: _globals.node,
        }
    }
)