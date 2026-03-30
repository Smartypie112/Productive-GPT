import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import VConsole
import VConsole from "vconsole";

// Initialize VConsole (only in development)
if (process.env.NODE_ENV === "development") {
  new VConsole();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
