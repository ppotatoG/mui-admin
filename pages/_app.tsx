import type { AppProps } from 'next/app';
import '@styles/reset.scss';

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

import { Provider } from 'react-redux';
import { store } from '@stores';

const App = ({ Component, pageProps }: AppProps) => {
  // useDispatch와 useSelector를 사용하기 전에 Provider로 감싸야 함
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </I18nextProvider>
  );
};

export default App;
