/// <reference types="vite/client" />

// Типи для CSS-модулів
declare module '*.module.css' {
  const classes: { [key: string]: string };
}

// Типи для SVG-файлів
declare module '*.svg' {
  const svgPath: string;
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}