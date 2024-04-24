/// <reference types="astro/client" />

declare module '*.svg?raw' {
  let content: string
  export default content
}
