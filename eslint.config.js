import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu({
  stylistic: {
    indent: 2,
    semi: false,
    quotes: 'single',
  },

  // unocss: true,
  vue: true,
  javascript: true,
}, tailwind.configs['flat/recommended'])
