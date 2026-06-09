import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export const Ic = {
  github: (p?: P) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  ),
  linkedin: (p?: P) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V9.99H5.67v8.35h2.67Zm-1.33-9.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.33 9.5v-4.58c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67c.04.75 0 8.35 0 8.35h2.67v-4.66c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8v4.48h2.66Z" />
    </svg>
  ),
  mail: (p?: P) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  arrow: (p?: P) => (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  ),
  resume: (p?: P) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v4h4M9 13h6M9 17h6M9 9h2" />
    </svg>
  ),
  copy: (p?: P) => (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h8" />
    </svg>
  ),
  check: (p?: P) => (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" {...p}>
      <path d="m5 12 5 5L20 6" />
    </svg>
  ),
  npm: (p?: P) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...p}>
      <path d="M2 4h20v16H12v-2h6V8h-3v8h-3V8H6v10H2z" />
    </svg>
  ),
  home: (p?: P) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <path d="M4 11 12 4l8 7M6 10v9h12v-9" />
    </svg>
  ),
  layers: (p?: P) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17l9 5 9-5" />
    </svg>
  ),
  clock: (p?: P) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  grid: (p?: P) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  box: (p?: P) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8ZM3 8l9 5 9-5M12 13v8" />
    </svg>
  ),
  pen: (p?: P) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <path d="M14 4 20 10 8 22H2v-6L14 4Z" />
      <path d="m13 5 6 6" />
    </svg>
  ),
  send: (p?: P) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
    </svg>
  ),
};
