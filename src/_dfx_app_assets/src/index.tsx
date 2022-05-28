/**
 * temp dev config
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';
import LogRocket from 'logrocket';

let dark_theme = '/css/dark.theme.css';
let light_theme = '/css/light.theme.css'

const themes = {
    dark: dark_theme,
    light: light_theme,
  };

import { ThemeSwitcherProvider } from "react-css-theme-switcher";

// dev
 import './style/theme/dark.theme.less';
// import './style/theme/light.theme.less';

import { 
  BrowserRouter, 
  Routes, Route, Link } from 'react-router-dom';

let netlify = false;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {netlify ?
      <ThemeSwitcherProvider themeMap={themes} defaultTheme="dark">
      <App />
      </ThemeSwitcherProvider>
       :
      <App />
    }
  </React.StrictMode>
);
LogRocket.init('bxwv0m/antd-cixuu');