
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Регистриране на service worker за кеширане
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker регистриран успешно:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker регистрацията се провали:', error);
      });
  });
}

const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(<App />);
