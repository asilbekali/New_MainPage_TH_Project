import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Loyihangizdagi tillar
  locales: ['uz', 'en', 'ru'],
  
  // Asosiy til
  defaultLocale: 'uz',

  // URL'da prefiks ko'rinmasligi uchun:
  localePrefix: 'never' 
});

export const config = {
  // Barcha sahifalarni qamrab olish uchun
  matcher: ['/', '/(uz|en|ru)/:path*']
};