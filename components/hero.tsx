"use client";
import React from 'react';
import { Box, Container, Typography, Button, Stack, Avatar, IconButton, useTheme, Badge } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import { motion, Variants } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

const MotionBox = motion(Box);

// Black Glassmorphism uchun umumiy stil
const glassStyle = {
  bgcolor: 'rgba(0, 0, 0, 0.45)', // To'q shaffof fon
  backdropFilter: 'blur(12px)', // Oyna effekti
  border: '1px solid rgba(255, 255, 255, 0.15)', // Mayin chegara
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
};

const Hero = () => {
  const theme = useTheme();
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const isDark = theme.palette.mode === 'dark';

  const renderTitle = () => {
    if (locale === 'uz') {
      return (
        <>
          {t('online')} <span style={{ color: '#F48C06' }}>{t('studying')}</span> endi {t('much')}
        </>
      );
    }
    return (
      <>
        <span style={{ color: '#F48C06' }}>{t('studying')}</span> {t('online')} {t('much')}
      </>
    );
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const floatingAnimation = (duration: number = 3, delay: number = 0) => ({
    animate: { y: [0, -10, 0] },
    transition: { 
      duration, 
      repeat: Infinity, 
      ease: "easeInOut" as const, 
      delay 
    }
  });

  return (
    <MotionBox  
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
      sx={{ 
        minHeight: { xs: 'auto', md: '85vh' }, 
        display: 'flex', 
        alignItems: 'center', 
        py: { xs: 6, md: 10 }, 
        overflow: 'visible', 
        position: 'relative',
        direction: isRtl ? 'rtl' : 'ltr'
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column-reverse', md: isRtl ? 'row-reverse' : 'row' }} 
          spacing={{ xs: 4, md: 4 }} 
          alignItems="center"
          sx={{ px: { xs: 2.5, sm: 4, md: 0 } }}
        >
          
          {/* TEXT SECTION */}
          <MotionBox 
            variants={itemVariants} 
            sx={{ 
              flex: 1.2, 
              textAlign: { xs: 'center', md: isRtl ? 'right' : 'left' }, 
              zIndex: 2,
              width: '100%'
            }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800, 
                color: isDark ? '#fff' : '#2F327D', 
                fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem' }, 
                lineHeight: 1.2, 
                mb: 2.5 
              }}
            >
              {renderTitle()}
            </Typography>
            <Typography sx={{ color: isDark ? '#A1A1A1' : '#696984', fontSize: { xs: '1rem', md: '1.2rem' }, mb: 4.5, maxWidth: { xs: '100%', md: '500px' }, mx: { xs: 'auto', md: isRtl ? '0 0 0 auto' : 0 } }}>
              {t('desc')}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} alignItems="center" justifyContent={{ xs: 'center', md: isRtl ? 'flex-end' : 'flex-start' }}>
              <Button variant="contained" sx={{ bgcolor: '#F48C06', borderRadius: '35px', px: 5, py: 1.6, textTransform: 'none', width: { xs: '100%', sm: 'auto' }, boxShadow: '0 10px 25px rgba(244, 140, 6, 0.3)', fontWeight: 600, '&:hover': { bgcolor: '#e07e05' } }}>
                {t('join_free')}
              </Button>



              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ cursor: 'pointer', py: 1 }}>
                <IconButton sx={{ bgcolor: isDark ? '#333' : 'white', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', color: '#23BEEE' }}>
                  <PlayArrowIcon sx={{ transform: isRtl ? 'rotate(180deg)' : 'none' }} />
                </IconButton>
                <Typography sx={{ fontWeight: 600, color: isDark ? '#fff' : '#2F327D' }}>{t('watch_video')}</Typography>
              </Stack>
            </Stack>
          </MotionBox>

          {/* IMAGE SECTION */}
          <MotionBox 
            variants={itemVariants} 
            sx={{ 
              flex: 1, 
              position: 'relative', 
              display: 'flex', 
              justifyContent: 'center', 
              width: '100%',
              mb: { xs: 8, md: 0 } 
            }}
          >
            <Box 
              component="img" 
              src="/colage_student.svg" 
              alt="Student" 
              sx={{ 
                width: { xs: '100%', sm: '80%', md: '100%' }, 
                height: 'auto', 
                zIndex: 1,
                // Pastki qismini yumshoq yo'qotish uchun mask
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              }} 
            />
            
            {/* 1. User Experience Class Card */}
            <MotionBox 
              {...floatingAnimation(4, 0.5)} 
              sx={{ 
                position: 'absolute', 
                top: { xs: '55%', md: '45%' }, 
                [isRtl ? 'right' : 'left']: { xs: '-5%', sm: '5%', md: '-8%' }, 
                zIndex: 10 
              }}
            >
              <Box sx={{ ...glassStyle, p: { xs: 1.2, md: 2 }, borderRadius: { xs: 2, md: 3 }, minWidth: { xs: '150px', md: '230px' } }}>
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                  <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" sx={{ '& .MuiBadge-badge': { bgcolor: '#2ED47A', width: 8, height: 8, border: '1.5px solid white' } }}>
                    <Avatar src="/teacher_avatar.jpg" sx={{ width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 } }} />
                  </Badge>
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: '#fff', fontSize: { xs: '0.65rem', md: '0.85rem' }, lineHeight: 1.2 }}>{t('user')}</Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: { xs: '0.55rem', md: '0.7rem' } }}>{t('time')}</Typography>
                  </Box> 
                </Stack>
                <Button fullWidth variant="contained" sx={{ bgcolor: '#D8587E', borderRadius: '15px', py: { xs: 0.6, md: 1 }, textTransform: 'none', fontSize: { xs: '0.6rem', md: '0.8rem' }, fontWeight: 600, '&:hover': { bgcolor: '#c24d6f' }, boxShadow: 'none' }}>{t('join_free')}</Button>
              </Box>
            </MotionBox>

            {/* 2. Floating Card - 250K Assistant */}
            <MotionBox {...floatingAnimation(3.5, 0.2)} sx={{ position: 'absolute', top: { xs: '5%', md: '15%' }, [isRtl ? 'right' : 'left']: { xs: '-5%', md: '0%' }, zIndex: 5 }}>
              <Box sx={{ ...glassStyle, p: { xs: 1, md: 1.2 }, borderRadius: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ bgcolor: 'rgba(35, 189, 238, 0.2)', color: '#23BDEE', borderRadius: 0.5, width: { xs: 26, md: 32 }, height: { xs: 26, md: 32 } }} variant="square">
                  <CalendarMonthIcon sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }} />
                </Avatar>
                <Box>




                  <Typography sx={{ fontWeight: 800, fontSize: { xs: '0.75rem', md: '0.9rem' }, color: '#fff', lineHeight: 1 }}>{t('250K')}</Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: { xs: '0.55rem', md: '0.65rem' } }}>{t('assistant')}</Typography>
                </Box>
              </Box>
            </MotionBox>

            {/* 3. Floating Card - Congratulations */}
            <MotionBox 
              {...floatingAnimation(4.5, 0.8)} 
              sx={{ 
                position: 'absolute', 
                bottom: { xs: '55%', md: '25%' }, 
                [isRtl ? 'left' : 'right']: { xs: '-6%', md: '5%' }, 
                zIndex: 5 
              }}
            >
              <Box sx={{ ...glassStyle, p: { xs: 1.2, md: 1.5 }, borderRadius: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ bgcolor: 'rgba(248, 140, 139, 0.2)', color: '#F88C8B', borderRadius: 1, width: { xs: 30, md: 35 }, height: { xs: 30, md: 35 } }} variant="square">
                  <EmailIcon sx={{ fontSize: { xs: '0.85rem', md: '1.1rem' } }} />
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.7rem', md: '0.85rem' }, color: '#fff' }}>{t('congratulations')}</Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: { xs: '0.55rem', md: '0.7rem' } }}>{t('admission_completed')}</Typography>
                </Box>
              </Box>
            </MotionBox>
          </MotionBox>
        </Stack>
      </Container>
    </MotionBox>
  );
};

export default Hero;