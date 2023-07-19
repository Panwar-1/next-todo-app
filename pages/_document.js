import {Html, Head, Main, NextScript} from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,500;0,600;1,500;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>

      <body>
        <Main />
        <NextScript />
        <div id="portal_1"></div>
        <div id="portal_2"></div>
      </body>
    </Html>
  )
}

export default Document;