import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import de from "./locales/de.json";

const messages = {
  en: en,
  de: de,
};

const i18n = createI18n({
  locale: "de", // set locale
  fallbackLocale: "de", // set fallback locale
  messages, // set locale messages
});

export default i18n;
