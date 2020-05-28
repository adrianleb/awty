import React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import { Global, css } from '@emotion/core';
import theme from '../src/theme';
import { ThemeProvider } from 'theme-ui';
import Moment from 'react-moment';
import 'moment-timezone';
import Router from 'next/router';
import withGA from 'next-ga';

const MyApp = class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&amp;display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600&amp;display=swap"
            rel="stylesheet"
          />
          {/* Social media */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@arewethreyetx" />
          <meta name="twitter:creator" content="@arewethreyetx" />
          <meta name="twitter:title" content="Are We There Yet Dot Club" />
          <meta
            name="twitter:description"
            content="Are We There Yet is a micro-creative festival showcasing lightning talks on the future of creativity"
          />
          <meta
            name="twitter:image"
            content="/twitter/tt-card-summary.png"
          />

          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Global
          styles={css`
            @font-face {
              font-family: 'porter-sans';
              src: url('/fonts/porter-sans-inline-block-webfont.eot');
              src: url('/fonts/porter-sans-inline-block-webfont.woff')
                  format('woff'),
                url('/fonts/porter-sans-inline-block-webfont.ttf')
                  format('truetype'),
                url('/fonts/porter-sans-inline-block-webfont.svg') format('svg');
              font-weight: normal;
              font-style: normal;
            }
          `}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
};

export default withGA('UA-165358220-1', Router)(MyApp);
