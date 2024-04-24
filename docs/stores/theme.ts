import { persistentAtom } from '@nanostores/persistent'
import { onSet } from 'nanostores'

export let $theme = persistentAtom<'light' | 'dark'>('theme', 'light')

onSet($theme, ({ newValue }) => {
  document.documentElement.setAttribute(
    'data-theme',
    newValue === 'dark' ? 'dark' : 'light',
  )
})
