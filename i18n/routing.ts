import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // Beshta tilni ko'rsatamiz
  locales: ['en', 'uz', 'ru', 'ar', 'tr'],
  defaultLocale: 'en'
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);