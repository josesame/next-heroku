import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const style = {
    margin: 0,
    padding: 0,
  }
  return (
    <Html style={style} lang="en">
      <Head />
      <body style={style}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
