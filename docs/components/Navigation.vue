<script lang="ts" setup>
import { useStore } from '@nanostores/vue'

import GithubIcon from '../icons/github.svg?raw'
import MoonIcon from '../icons/moon.svg?raw'
import MenuIcon from '../icons/menu.svg?raw'
import SunIcon from '../icons/sun.svg?raw'
import { $theme } from '../stores/theme'

let theme = useStore($theme)
let toggleTheme = () => {
  $theme.set(theme.value === 'dark' ? 'light' : 'dark')
}

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <button v-html="MenuIcon" class="nav-link mobile-menu-button" />
  <nav class="nav">
    <a href="/guide" class="nav-link">Guide</a>
    <a href="/configs" class="nav-link">Configs</a>
    <a href="/rules" class="nav-link">Rules</a>
    <hr class="hr" />
    <button
      v-html="theme === 'dark' ? SunIcon : MoonIcon"
      @click="toggleTheme"
      class="nav-link"
    />
    <hr class="hr" />
    <a
      href="https://github.com/azat-io/eslint-plugin-perfectionist"
      v-html="GithubIcon"
      class="nav-link"
      target="_blank"
    >
    </a>
  </nav>
</template>

<style scoped>
.nav {
  display: none;

  @container (inline-size >= 720px) {
    display: flex;
    gap: 16px;
    align-items: center;
  }
}

.nav-link {
  display: flex;
  padding: 12px;
  font: var(--font-s);
  color: inherit;
  text-decoration: none;
  background: none;
  border: 0;
  border-radius: var(--border-radius);
  outline: none;
  transition: all 250ms;

  & :global(svg) {
    inline-size: 28px;
    block-size: 28px;
  }

  @media (hover: hover) {
    &:hover {
      background: var(--color-background-primary-hover);
    }
  }

  &:focus-visible {
    background: var(--color-overlay-brand);
    box-shadow: 0 0 0 3px var(--color-border-brand);
    transition-property: box-shadow;
  }
}

@container (inline-size >= 720px) {
  .mobile-menu-button {
    display: none;
  }
}

.hr {
  inline-size: 1px;
  block-size: 28px;
  margin-block: 4px;
  background: var(--color-background-primary-hover);
  border: none;
}
</style>
