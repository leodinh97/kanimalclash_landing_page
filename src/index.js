import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './test/reportWebVitals';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import './css/index.css';
import './js/index.js';
import './assets/font/jadil/Jaldi-Bold.ttf';
import './assets/font/jadil/Jaldi-Regular.ttf';
import 'bootstrap/dist/css/bootstrap.min.css';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        supportedLngs: ["en", "ko"],
        fallbackLng: "en",
        detection: {
            order: ["cookie", "localStorage", "sessionStorage", "navigator"],
            caches: ["cookie"]
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
        react: { useSuspense: false },

        interpolation: {
            escapeValue: false
        }
    });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
