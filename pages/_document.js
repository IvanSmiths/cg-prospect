import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <script
            data-ad-client="ca-pub-1432121328259655"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script> */}
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main>
            {/* <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-5WQM4L8"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>
            </noscript> */}
          </Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
