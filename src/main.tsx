
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initPerformanceOptimizations } from './utils/performanceOptimizations'

// Initialize performance optimizations
initPerformanceOptimizations();

// Unregister all service workers and clear caches to prevent stale React chunks
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    // First, unregister all existing service workers
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      await registration.unregister();
      console.log('Service Worker премахнат:', registration.scope);
    }
    // Clear all caches to remove stale Vite chunks
    const cacheNames = await caches.keys();
    for (const cacheName of cacheNames) {
      await caches.delete(cacheName);
      console.log('Кеш изтрит:', cacheName);
    }
    // Re-register fresh service worker
    try {
      const reg = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker регистриран успешно:', reg.scope);
    } catch (error) {
      console.log('Service Worker регистрацията се провали:', error);
    }
  });
}

const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(<App />);
