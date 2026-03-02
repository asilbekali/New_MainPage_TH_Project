import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // Locale parametrini kutamiz (await)
  let locale = await requestLocale;
    console.log(locale , "kkkkkk")
  // Agar locale mavjud bo'lmasa yoki ro'yxatda bo'lmasa, defaultLocale-ni ishlatamiz
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // Sizning strukturangiz: locales/[locale]/default.json
    messages: (await import(`../locales/${locale}/default.json`)).default
  };
});