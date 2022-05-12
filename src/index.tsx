import React from 'react';
import ReactDOM from 'react-dom/client';

// import { ThemeSwitcherProvider } from "react-css-theme-switcher";

// const themes = {
//   dark: `/css/dark.theme.css`,
//   light: `/css/light.theme.css`,
// };

import './style/theme/dark.theme.less';

import { Button, DatePicker } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <ThemeSwitcherProvider themeMap={themes} defaultTheme="light"> */}
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
    {/* </ThemeSwitcherProvider> */}
  </React.StrictMode>
);