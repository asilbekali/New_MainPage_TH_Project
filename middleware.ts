import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Faqat tilga tegishli yo'llarni (match) qilish uchun
  matcher: ['/', '/(uz|en|ru|ar|tr)/:path*']
};