import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const trackingID = 'UA-16570713-5'
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Chivo:wght@300;400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.1/build/pure-min.css" integrity="sha384-QkSsJi6SGgWv5LAx1TdvIDRf8TW5Ui4NVKqDDlK1wY2eKioo7wvYIJvGWFQSFE4U" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/grids-responsive-min.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <script async src={'https://www.googletagmanager.com/gtag/js?id=' + trackingID} />
          <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${trackingID}');`
            }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
