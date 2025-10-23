// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

export default function Document() {
  return (
    <Html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Head />
      <body className="font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
