import React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import { Global, css } from '@emotion/core';
import theme from '../src/theme';
import { ThemeProvider } from 'theme-ui';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&amp;display=swap"
            rel="stylesheet"
          />
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
}
