import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="La Universidad Nacional de Colombia, sede Bogotá, desde el área de Bienestar Universitario proporciona diversos cursos libres en deporte y otras áreas con el propósito de ofrecer una formación integral que incluya hábitos saludables, uso adecuado del tiempo libre y la integración de la comunidad universitaria." />
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin  = "" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700;900&display=swap" rel="stylesheet"/>
      <link rel="icon" href="/icon.webp" />
      <body
        style={{
          backgroundColor: "#f5f5f5",
          fontFamily: "Source Sans Pro, sans-serif"
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
