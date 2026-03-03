"use client";
import React from 'react';
import { Box, Container, Typography, Button, Stack, Avatar, IconButton, useTheme } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import { motion, Variants } from 'framer-motion';

// TypeScript xatolarini oldini olish uchun MotionBox yaratamiz
const MotionBox = motion(Box);

const Hero = () => {
  const theme = useTheme();

  // Kirish animatsiyalari (Stagger effect)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // Suzish animatsiyasi (Floating)
  const floatingAnimation = (duration: number = 3, delay: number = 0) => ({
    animate: {
      y: [0, -10, 0],
    },
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
        // Mobil qurilmada balandlik auto bo'ladi, shunda kontent sig'may qolsa pastga scroll bo'ladi
        minHeight: { xs: 'auto', md: '90vh' }, 
        display: 'flex', 
        alignItems: 'center', 
        // Mobil uchun tepadan va pastdan ko'proq joy qoldiramiz
        py: { xs: 6, md: 10 }, 
        // Gorizontal scroll chiqib ketmasligi uchun
        overflowX: 'hidden', 
        position: 'relative',
        bgcolor: 'transparent'
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 8, md: 4 }} 
          alignItems="center"
        >
          {/* Rasm qismi - Mobilda tepada chiqadi */}
          <MotionBox 
            variants={itemVariants}
            sx={{ 
              flex: 1, 
              position: 'relative', 
              display: 'flex', 
              justifyContent: 'center',
              order: { xs: 1, md: 2 },
              width: '100%'
            }}
          >
            {/* Asosiy talaba rasmi */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ width: '100%', maxWidth: '450px', display: 'flex', justifyContent: 'center' }}
            >
              <Box
                component="img"
                src="./colage_student.svg" 
                alt="Student"
                sx={{ 
                  width: { xs: '85%', sm: '75%', md: '100%' }, 
                  height: 'auto', 
                  zIndex: 1, 
                  filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.1))' 
                }}
              />
            </motion.div>

            {/* 250K Student Card */}
            <MotionBox 
              {...floatingAnimation(3.5, 0.2)}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              sx={{ position: 'absolute', top: '5%', left: { xs: '2%', md: '-5%' }, zIndex: 2 }}
            >
              <Box sx={{ bgcolor: 'white', p: { xs: 1, md: 2 }, borderRadius: 2.5, boxShadow: '0 8px 30px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar sx={{ bgcolor: 'rgba(35, 189, 238, 0.15)', color: '#23BDEE', borderRadius: 1.5, width: { xs: 28, md: 35 }, height: { xs: 28, md: 35 } }} variant="square">
                  <CalendarMonthIcon fontSize="small" />
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: '#2F327D', fontSize: { xs: '0.75rem', md: '0.9rem' } }}>250K</Typography>
                  <Typography variant="caption" sx={{ color: '#696984', fontSize: '0.65rem' }}>Assistent</Typography>
                </Box>
              </Box>
            </MotionBox>

            {/* Admission Card */}
            <MotionBox 
              {...floatingAnimation(4, 0.8)}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              sx={{ position: 'absolute', top: '40%', right: { xs: '2%', md: '-5%' }, zIndex: 2 }}
            >
              <Box sx={{ bgcolor: 'white', p: { xs: 1, md: 2 }, borderRadius: 2, boxShadow: '0 8px 30px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar sx={{ bgcolor: '#F88C8B', borderRadius: 1.5, width: { xs: 28, md: 35 }, height: { xs: 28, md: 35 } }} variant="square">
                  <EmailIcon sx={{ color: 'white', fontSize: '1rem' }} />
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.7rem', md: '0.8rem' }, color: '#2F327D' }}>Congratulations</Typography>
                  <Typography variant="caption" sx={{ color: '#696984', fontSize: '0.65rem' }}>Admission completed</Typography>
                </Box>
              </Box>
            </MotionBox>

            {/* UX Class Card */}
            <MotionBox 
              {...floatingAnimation(3, 0.5)}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              sx={{ position: 'absolute', bottom: '5%', left: { xs: '5%', md: '0%' }, zIndex: 2 }}
            >
              <Box sx={{ bgcolor: 'white', p: { xs: 1.5, md: 2.5 }, borderRadius: 3, boxShadow: '0 12px 40px rgba(0,0,0,0.12)', width: { xs: '150px', md: '220px' } }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                  <Avatar src="/user-avatar.png" sx={{ width: 30, height: 30 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.7rem', color: '#2F327D', lineHeight: 1.2 }}>UX Class</Typography>
                    <Typography variant="caption" sx={{ color: '#696984', fontSize: '0.6rem' }}>Today 12:00 PM</Typography>
                  </Box>
                </Stack>
                <Button size="small" variant="contained" fullWidth sx={{ bgcolor: '#D8587E', borderRadius: '20px', textTransform: 'none', fontSize: '0.65rem' }}>Join Now</Button>
              </Box>
            </MotionBox>
          </MotionBox>

          {/* Matn qismi - Mobilda pastda chiqadi */}
          <MotionBox 
            variants={itemVariants}
            sx={{ 
              flex: 1.2, 
              textAlign: { xs: 'center', md: 'left' }, 
              order: { xs: 2, md: 1 } 
            }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800, 
                color: theme.palette.mode === 'dark' ? '#fff' : '#2F327D', 
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' }, 
                lineHeight: 1.1, 
                mb: 2 
              }}
            >
              Studying <span style={{ color: '#F48C06' }}>online</span> is now <br /> much easier
            </Typography>
            <Typography 
              sx={{ 
                color: theme.palette.mode === 'dark' ? '#A1A1A1' : '#696984', 
                fontSize: { xs: '1rem', md: '1.2rem' }, 
                mb: 5, 
                maxWidth: { xs: '100%', md: '500px' },
                mx: { xs: 'auto', md: 0 }
              }}
            >
              TOTC is an interesting platform that will teach you in a more interactive way.
            </Typography>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              alignItems="center" 
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <Button 
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="contained" 
                sx={{ 
                  bgcolor: '#F48C06', 
                  borderRadius: '35px', 
                  px: 5, py: 1.8, 
                  fontSize: '1rem', 
                  textTransform: 'none',
                  width: { xs: '100%', sm: 'auto' },
                  boxShadow: '0 10px 25px rgba(244, 140, 6, 0.3)',
                  '&:hover': { bgcolor: '#e07e05' } 
                }}
              >
                Join for free
              </Button>

              <Stack 
                direction="row" 
                spacing={1.5} 
                alignItems="center" 
                sx={{ cursor: 'pointer' }}
                component={motion.div}
                whileHover={{ x: 5 }}
              >
                <IconButton sx={{ bgcolor: 'white', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', color: '#23BEEE' }}>
                  <PlayArrowIcon />
                </IconButton>
                <Typography sx={{ fontWeight: 600, color: theme.palette.mode === 'dark' ? '#fff' : '#2F327D' }}>
                  Watch how it works
                </Typography>
              </Stack>
            </Stack>
          </MotionBox>
        </Stack>
      </Container>
    </MotionBox>
  );
};

export default Hero;