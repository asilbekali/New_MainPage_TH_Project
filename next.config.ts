import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['uz', 'en', 'ru'], // o'zingizdagi tillar
  defaultLocale: 'uz',
  localePrefix: 'as-needed' // SHU QATORNI QO'SHING
});

export const config = {
  matcher: ['/', '/(uz|en|ru)/:path*']
};