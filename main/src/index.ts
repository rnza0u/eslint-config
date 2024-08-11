import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strict,
    {
        rules: {
            '@typescript-eslint/no-var-requires': 'off'
        }
    },
    {
        plugins: {
            '@stylistic': stylistic.default
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/no-extra-semi': ['error'],
            '@stylistic/semi': ['error', 'never'],
            '@stylistic/quotes': ['error', 'single']
        }
    },
    {
        ignores: ['**/dist/', '**/lib/', '**/node_modules', 'build/', '.docusaurus/'],
    }
)