/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// SVG import type declarations
declare module '*.svg?react' {
  import { FunctionComponent, SVGProps } from 'react'
  const content: FunctionComponent<SVGProps<SVGSVGElement>>
  export default content
}

declare module '*.svg' {
  const content: string
  export default content
}
