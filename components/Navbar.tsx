"use client";

import * as React from 'react';
import { 
  AppBar, Box, Toolbar, IconButton, Typography, 
  Menu, Container, Button, MenuItem, useScrollTrigger 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const languages = [
  { code: 'uz', label: 'O‘zbekcha' },
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'ar', label: 'العربية' }, // Arab tili qo'shildi
  { code: 'tr', label: 'Türkçe' }
];
function ResponsiveAppBar() {
  const t = useTranslations('header'); // JSON-dagi 'header' obyektidan foydalanamiz
  const pathname = usePathname();
  const router = useRouter();

  // Hozirgi tilni URL-dan aniqlash
  const currentLocale = pathname.split('/')[1] || 'en';

  // Menyu elementlari
// Navbar.tsx ichidagi pages qismini mana bunday yozing:
const pages = [
  { name: t('home'), link: '/' },
  { name: t('course'), link: '/courses' },
  { name: t('career'), link: '/career' },
  { name: t('blog'), link: '/blog' },
];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElLang(event.currentTarget);

  // Til o'zgarganda URL-ni yangilash mantiqi
  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    setAnchorElLang(null);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AppBar 
        position="fixed" 
        sx={{
          background: trigger ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          backdropFilter: trigger ? 'blur(20px)' : 'none',
          boxShadow: trigger ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none',
          borderBottom: trigger ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          color: '#333'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            
            {/* LOGO */}
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#00bcd4', letterSpacing: '-1px' }}>
                    LOGO
                </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 3 }}>
              {pages.map((page) => (
                <Box key={page.name} sx={{ position: 'relative', '&:hover .hover-line': { width: '100%' } }}>
                    <Button
                        href={`/${currentLocale}${page.link}`}
                        sx={{ 
                            my: 2, color: '#2c3e50', display: 'block', textTransform: 'none',
                            fontWeight: 500, fontSize: '15px', transition: '0.3s',
                            '&:hover': { color: '#00bcd4', backgroundColor: 'transparent' }
                        }}
                    >
                        {page.name}
                    </Button>
                    <Box 
                        className="hover-line"
                        sx={{ 
                            position: 'absolute', bottom: 12, left: 0, width: '0%', height: '2px', 
                            backgroundColor: '#00bcd4', transition: 'width 0.3s ease-in-out' 
                        }} 
                    />
                </Box>
              ))}
            </Box>

            {/* O'ng tomon: Til va Kirish */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              
              <Button 
                onClick={handleOpenLangMenu}
                startIcon={<LanguageIcon sx={{ fontSize: 20 }} />} 
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ color: '#444', textTransform: 'uppercase', fontWeight: 600 }}
              >
                {currentLocale}
              </Button>
              <Menu
                anchorEl={anchorElLang}
                open={Boolean(anchorElLang)}
                onClose={() => setAnchorElLang(null)}
                PaperProps={{
                    sx: { mt: 1, borderRadius: '12px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }
                }}
              >
                {languages.map((lang) => (
                  <MenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                    <Typography sx={{ fontSize: '14px' }}>{lang.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>

              <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
                <Button href={`/${currentLocale}/login`} sx={{ color: '#444', textTransform: 'none', fontWeight: 600 }}>
                    Log In
                </Button>
                <Button 
                    variant="contained" 
                    href={`/${currentLocale}/register`}
                    sx={{ 
                        borderRadius: '12px', px: 3, textTransform: 'none',
                        backgroundColor: '#00bcd4', boxShadow: 'none',
                        '&:hover': { backgroundColor: '#00acc1' }
                    }}
                >
                    Sign Up
                </Button>
              </Box>

              <IconButton onClick={handleOpenNavMenu} sx={{ display: { xs: 'flex', md: 'none' }, color: '#444' }}>
                <MenuIcon />
              </IconButton>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
}

export default ResponsiveAppBar;