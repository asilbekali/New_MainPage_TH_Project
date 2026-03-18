"use client";

import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const languages = [
  { code: "uz", label: "O‘zbekcha" },
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "ar", label: "العربية" },
  { code: "tr", label: "Türkçe" },
];

function ResponsiveAppBar() {
  const t = useTranslations("header");
  const locale = useLocale(); // ✅ shu haqiqiy active locale
  const pathname = usePathname();
  const router = useRouter();

  const pages = [
    { name: t("home"), link: "hero" },
    { name: t("aboutus"), link: "aboutus" },
    { name: t("course"), link: "features" },
    { name: t("contact"), link: "footer" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElLang(event.currentTarget);

  const handleNavClick = (linkId: string) => {
    handleCloseNavMenu();

    if (pathname === `/${locale}` || pathname === `/`) {
      const element = document.getElementById(linkId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/${locale}#${linkId}`);
    }
  };

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);

    // agar birinchi segment locale bo‘lsa almashtiramiz
    if (languages.some((lang) => lang.code === segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    router.push(`/${segments.join("/")}`);
    setAnchorElLang(null);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ position: "relative", zIndex: 1300 }}
    >
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1301,
          background: trigger ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(15px)",
          boxShadow: trigger ? "0 4px 30px rgba(0, 0, 0, 0.2)" : "none",
          borderBottom: trigger ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          color: "#fff",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", height: { xs: "64px", md: "80px" } }}
          >
            <Box
              onClick={() => handleNavClick("hero")}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                height: { xs: "35px", md: "45px" },
              }}
            >
              <img
                src="/logo.svg"
                alt="Logo"
                style={{
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 3,
              }}
            >
              {pages.map((page) => (
                <Box
                  key={page.name}
                  sx={{
                    position: "relative",
                    "&:hover .hover-line": { width: "100%" },
                  }}
                >
                  <Button
                    onClick={() => handleNavClick(page.link)}
                    sx={{
                      my: 2,
                      color: "#fff",
                      display: "block",
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: "15px",
                      transition: "0.3s",
                      "&:hover": {
                        color: "#00bcd4",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                  <Box
                    className="hover-line"
                    sx={{
                      position: "absolute",
                      bottom: 12,
                      left: 0,
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#00bcd4",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </Box>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                onClick={handleOpenLangMenu}
                startIcon={<LanguageIcon sx={{ fontSize: 20, color: "#fff" }} />}
                endIcon={<KeyboardArrowDownIcon sx={{ color: "#fff" }} />}
                sx={{ color: "#fff", textTransform: "uppercase", fontWeight: 600 }}
              >
                {locale}
              </Button>

              <Menu
                anchorEl={anchorElLang}
                open={Boolean(anchorElLang)}
                onClose={() => setAnchorElLang(null)}
                PaperProps={{ sx: { mt: 1, borderRadius: "12px" } }}
              >
                {languages.map((lang) => (
                  <MenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                    {lang.label}
                  </MenuItem>
                ))}
              </Menu>

              <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
                <Button
                  onClick={() => router.push(`/${locale}/login`)}
                  sx={{ color: "#fff", textTransform: "none", fontWeight: 600 }}
                >
                  {t("login")}
                </Button>
                <Button
                  variant="contained"
                  onClick={() => router.push(`/${locale}/register`)}
                  sx={{
                    borderRadius: "12px",
                    px: 3,
                    backgroundColor: "#00bcd4",
                    textTransform: "none",
                    fontWeight: 600,
                    boxShadow: "none",
                  }}
                >
                  {t("signup")}
                </Button>
              </Box>

              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorElNav}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  PaperProps={{ sx: { width: "200px", borderRadius: "12px", mt: 1.5 } }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={() => handleNavClick(page.link)}>
                      <Typography textAlign="center" sx={{ fontWeight: 500 }}>
                        {page.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
}

export default ResponsiveAppBar;