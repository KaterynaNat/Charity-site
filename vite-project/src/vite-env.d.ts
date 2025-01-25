/// <reference types="vite/client" />

declare module '*.svg' {
    const svgPath: string;
  
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  }