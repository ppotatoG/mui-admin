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
import { useTheme } from '@hook/useTheme';
import Header from '@layout/Header';
import Navigate from '@layout/Navigate';
import Section from '@layout/Section';
import AuthProvider from '@provider/authProvider';

const App = ({ Component, pageProps }: AppProps) => {
  const { theme } = useTheme();
  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <ThemeContextProvider>
          <ThemeProvider theme={themes[theme]}>
            <div className="root">
              <Header />
              <Navigate />
              <Section>
                <Component {...pageProps} />
              </Section>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </AuthProvider>
    </I18nextProvider>
  );
};

export default App;
