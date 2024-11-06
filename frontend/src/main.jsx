import React from 'react'; // Keep this import for JSX
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
     <ShopContextProvider>
        <App />
     </ShopContextProvider>
  </BrowserRouter>
);
