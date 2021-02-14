import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './src/styles/Theme';
import Layout from './src/layout/Layout';

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider theme={lightTheme}>
    <Layout {...props}>{element}</Layout>
  </ThemeProvider>
);
