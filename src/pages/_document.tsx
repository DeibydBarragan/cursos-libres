import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&display=swap" rel="stylesheet"/>
      <body
        style={{
          backgroundColor: "#f5f5f5",
          fontFamily: "Raleway, sans-serif"
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
