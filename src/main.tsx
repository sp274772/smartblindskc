import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

document.title = "SmartBlindsKC";
console.log("Title set to SmartBlindsKC");

// Keep setting the title for a few seconds to override any platform defaults
const titleInterval = setInterval(() => {
  if (document.title !== "SmartBlindsKC") {
    document.title = "SmartBlindsKC";
  }
}, 100);

setTimeout(() => clearInterval(titleInterval), 5000);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
