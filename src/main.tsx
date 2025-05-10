
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add event listener for content loaded to improve perceived performance
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(<App />);
  }
});

// If the browser supports it, use createRoot immediately for faster initial render
if (!document.getElementById('root')?.hasChildNodes()) {
  createRoot(document.getElementById("root")!).render(<App />);
}
