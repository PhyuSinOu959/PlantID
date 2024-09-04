import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/en.json';
import hi from './hi/hi.json';
import vi from './vi/vi.json';

i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: en,
        hi: hi,
        vi: vi,
    },
    interpolation: {
        escapeValue: false
    }
});

export default i18n;