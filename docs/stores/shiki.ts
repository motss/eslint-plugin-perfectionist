import type { HighlighterCore } from 'shiki'

import { createCssVariablesTheme, getHighlighterCore } from 'shiki'
import { computed, onMount, atom, task } from 'nanostores'

import { $theme } from './theme'

let $shikiHighlighter = atom<HighlighterCore | null>(null)

let colorTheme = createCssVariablesTheme({
  variablePrefix: '--color-code-',
  name: 'css-variables',
  variableDefaults: {},
  fontStyle: true,
})

export let $shiki = computed(
  [$shikiHighlighter, $theme],
  (highlighter, theme) => ({
    // theme: `github-${theme}`,
    theme: 'css-variables',
    highlighter,
  }),
)

onMount($shikiHighlighter, () => {
  task(async () => {
    let highlighter = await getHighlighterCore({
      themes: [
        colorTheme,
        // import('shiki/themes/github-dark.mjs'),
        // import('shiki/themes/github-light.mjs'),
      ],
      langs: [
        import('shiki/langs/bash.mjs'),
        import('shiki/langs/js.mjs'),
        import('shiki/langs/ts.mjs'),
      ],
      loadWasm: import('shiki/wasm'),
    })

    $shikiHighlighter.set(highlighter)
  })
})
