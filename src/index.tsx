import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from "./app";

import './styles/globals.scss';

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);
root.render(
  <StrictMode>
      <App />
  </StrictMode>
);
