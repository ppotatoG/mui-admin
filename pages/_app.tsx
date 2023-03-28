import '@styles/globals.scss';
import type { AppProps } from 'next/app';

import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';

import enTranslation from '@public/locales/en/translation.json';
import koTranslation from '@public/locales/ko/translation.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: enTranslation,
    },
    ko: {
      translation: koTranslation,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}
