import mod from '../index'

export default {
  plugins: {
    perfectionist: mod,
  },
  rules: mod.configs['recommended-natural'].rules,
}