/**
 * temp dev config
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';

const environment = process.env.ENV_MODE;

const themes = {
  dark: `/css/dark.theme.css`,
  light: `/css/light.theme.css`,
};

import { ThemeSwitcherProvider } from "react-css-theme-switcher";

// import './style/theme/dark.theme.less';
// import './style/theme/light.theme.less';

const root = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {environment === 'production' ?
      <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
      <App />
      </ThemeSwitcherProvider>
      :
      <App />
    }
  </React.StrictMode>
);