import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './src/layout/Layout';
import { lightTheme } from './src/styles/Theme';

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider theme={lightTheme}>
    <Layout {...props}>{element}</Layout>
  </ThemeProvider>
);
