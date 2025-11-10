// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/images/favicon.png" />

        {/* ✅ Google Fonts (optional, if used in your blog) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* ✅ Font Awesome for icons */}
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossOrigin="anonymous"
          async
        ></script>
          {/* Google AdSense script (keep your client id) */}
          <script
            async
            data-ad-client="ca-pub-8061135224509487"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            crossOrigin="anonymous"
          ></script>

          {/* Google Analytics: replace ID if necessary */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-J8604DGR3T"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J8604DGR3T');
            `,
            }}
          />
          {/* Fonts & meta from original site (adjust if needed) */}
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />

<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
  rel="stylesheet"
/>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
