import type { AppProps } from 'next/app';
import '@styles/reset.scss';
import '@styles/common.scss';

import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';

import enTranslation from '@public/locales/en/translation.json';
import koTranslation from '@public/locales/ko/translation.json';

i18n
  .use(initReactI18next)
  .init({
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
  })
  .then();

import { ThemeProvider } from 'styled-components';
import ThemeContextProvider from '@contexts/ThemeContext';
import themes from '@styles/themes';

import Header from '@layout/Header';
import Navigate from '@layout/Navigate';
import Section from '@layout/Section';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContextProvider>
        <ThemeProvider theme={themes.light}>
          <div className="root">
            <Header />
            <Navigate />
            <Section>
              <Component {...pageProps} />
            </Section>
          </div>
        </ThemeProvider>
      </ThemeContextProvider>
    </I18nextProvider>
  );
};

export default App;
