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
