'use client';

import { Suspense, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { ContextProvider } from 'hooks';

import { FacebookPixelEvents } from 'components/FacebookPixel';

import { get_current_config } from 'constants/environment-variables';

import GlobalStyles from 'styles/GlobalStyles';

import { Providers } from './providers';

import 'keen-slider/keen-slider.min.css';

import Script from 'next/script';

export default function RootLayout(props: React.PropsWithChildren) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <html lang={get_current_config().locale}>
      <body>
        {!loading && (
          <>
            <GlobalStyles />
            <Providers>
              <ContextProvider>
                {props.children}
                <Suspense fallback={null}>
                  <FacebookPixelEvents />
                </Suspense>
                <Toaster
                  position="top-right"
                  reverseOrder={false}
                  gutter={8}
                  containerClassName=""
                  containerStyle={{}}
                  toastOptions={{
                    className: '',
                    duration: undefined,
                    style: {
                      background: '#363636',
                      color: '#fff'
                    }
                  }}
                />
              </ContextProvider>
            </Providers>
          </>
        )}
        <Script>
          {`
            (function (a, b, c, d, e, f, g) {
              a['CsdpObject'] = e; a[e] = a[e] || function () {
                (a[e].q = a[e].q || []).push(arguments)
              }, a[e].l = 1 * new Date(); f = b.createElement(c),
              g = b.getElementsByTagName(c)[0]; f.async = 1; f.src = d; g.parentNode.insertBefore(f, g)
            })(window, document, 'script', '//device.clearsale.com.br/p/fp.js', 'csdp');
            csdp('app', 'your_clientid');
            csdp('sessionid', 'your_sessionid');
          `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </body>
    </html>
  );
}
