<script lang="ts" setup>
import { ShikiMagicMove } from 'shiki-magic-move/vue'
import { useStore } from '@nanostores/vue'
import { ref } from 'vue'

import 'shiki-magic-move/style.css'

import { $shiki } from '../stores/shiki'

let props = defineProps<{
  initial: string
  alphabetical: string
  lineLength: string
  lang?: string
}>()

let shiki = useStore($shiki)
let selectedValue = ref<'initial' | 'alphabetical' | 'lineLength'>('initial')
</script>

<template>
  <div class="button-group">
    <button @click="selectedValue = 'alphabetical'">Sort Alphabetically</button>
    <button @click="selectedValue = 'lineLength'">Sort by Line Length</button>
  </div>
  <div>
    <ShikiMagicMove
      :options="{
        animateContainer: false,
        duration: 500,
        stagger: 3,
      }"
      style="scrollbar-gutter: stable"
      :highlighter="shiki.highlighter"
      :code="props[selectedValue]"
      :lang="props.lang ?? 'js'"
      v-if="shiki.highlighter"
      :theme="shiki.theme"
      class="code"
    />
  </div>
</template>

<style scoped>
.tabs {
  display: inline-flex;
  overflow: hidden;
  border: 1px solid var(--color-border-primary);
  border-block-end: none;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}

.tab {
  z-index: 1;
  padding: var(--space-2xs) var(--space-xs);
  font: var(--font-s);
  color: var(--color-content-secondary);
  background: var(--color-background-secondary);
  border: none;
  border-block-end: 1px solid var(--color-border-primary);
  border-radius: 0;
  outline: none;
  transition: all 300ms;

  &:focus-visible {
    background: var(--color-background-secondary-hover);
  }
}

.active-tab {
  color: var(--color-content-primary);
  border-block-end-color: var(--color-content-primary);
  transition: border-color 600ms;
}

.code {
  margin-block-start: -1px;
  border-start-start-radius: 0;
}
</style>
