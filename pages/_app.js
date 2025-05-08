// pages/_app.js
import Script from 'next/script';
import Head from 'next/head';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      {/* Meta tag for Google AdSense */}
      <Head>
        <meta name="google-adsense-account" content="ca-pub-4624388385890799" />
      </Head>

      {/* Google AdSense Script */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4624388385890799"
        crossOrigin="anonymous"
      />

      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
