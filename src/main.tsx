
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'
import { ScrollToTop } from '@/utils/ScrollToTop'

// Mount the app with StrictMode for better development experience
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScrollToTop />
    <App />
  </StrictMode>
);
