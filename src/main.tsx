
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Only create root once to prevent "removeChild" errors
const rootElement = document.getElementById("root");

if (rootElement) {
  // Check if the root already has children
  if (!rootElement.hasChildNodes()) {
    createRoot(rootElement).render(<App />);
  }
}
