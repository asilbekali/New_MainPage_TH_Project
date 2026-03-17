"use client";

import React, { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Stack,
  Fade,
  Chip,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import { motion, AnimatePresence } from "framer-motion";

type VideoCompareModalProps = {
  open: boolean;
  onClose: () => void;
};

const DEMO_VIDEOS = {
  ted: {
    title: "TED Talks: Inson yuzi va nutq sinxroni",
    subtitle: "Real inson yuzi va nutq moslashuvi namunasi",
    orig: "https://youtu.be/-ZNzmR7rEzQ",
    dub: "https://youtu.be/9e67Eawu42A",
    accent: "#22d3ee",
    accentSoft: "rgba(34, 211, 238, 0.14)",
    accentBorder: "rgba(34, 211, 238, 0.28)",
  },
  course: {
    title: "Dasturlash kursi: Texnik kontent dublaji",
    subtitle: "Ta'lim kontenti uchun AI ovoz va tarjima namunasi",
    orig: "https://youtu.be/vrYt4Vc67Qo",
    dub: "https://youtu.be/xhajk7zzHbI",
    accent: "#f59e0b",
    accentSoft: "rgba(245, 158, 11, 0.14)",
    accentBorder: "rgba(245, 158, 11, 0.28)",
  },
};

export default function VideoCompareModal({
  open,
  onClose,
}: VideoCompareModalProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [videoType, setVideoType] = useState<"ted" | "course">("ted");
  const [isDubbed, setIsDubbed] = useState(false);

  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : url;
  };

  const currentVideo = DEMO_VIDEOS[videoType];

  const currentId = useMemo(() => {
    return getYouTubeId(isDubbed ? currentVideo.dub : currentVideo.orig);
  }, [currentVideo, isDubbed]);

  const handleChangeType = (type: "ted" | "course") => {
    setVideoType(type);
    setIsDubbed(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false}
      TransitionComponent={Fade}
      PaperProps={{
        sx: {
          width: {
            xs: "calc(100% - 16px)",
            sm: "calc(100% - 32px)",
            md: "920px",
            lg: "980px",
          },
          maxWidth: "980px",
          m: { xs: 1, sm: 2 },
          borderRadius: { xs: "24px", sm: "28px", md: "30px" },
          overflow: "hidden",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.08)",
          background: `
            radial-gradient(circle at top left, rgba(34,211,238,0.10), transparent 22%),
            radial-gradient(circle at top right, rgba(99,102,241,0.10), transparent 20%),
            linear-gradient(180deg, rgba(7,12,24,0.98) 0%, rgba(5,10,20,0.98) 100%)
          `,
          boxShadow:
            "0 30px 100px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
        },
      }}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(10px)",
          background: "rgba(2, 6, 15, 0.72)",
        },
      }}
    >
      <DialogContent
        sx={{
          p: { xs: 1.4, sm: 2, md: 2.5 },
        }}
      >
        {/* Top header */}
        <Stack spacing={2}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "0.74rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.42)",
                  fontWeight: 800,
                }}
              >
                Demo namunalar
              </Typography>
            </Box>

            <IconButton
              onClick={onClose}
              sx={{
                width: 42,
                height: 42,
                color: "rgba(255,255,255,0.78)",
                bgcolor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Stack>

          {/* Segmented switch */}
          <Box
            sx={{
              p: "5px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.08)",
              bgcolor: "rgba(255,255,255,0.035)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6px",
            }}
          >
            <Button
              onClick={() => handleChangeType("ted")}
              startIcon={<RecordVoiceOverRoundedIcon />}
              sx={{
                minHeight: { xs: 46, md: 50 },
                borderRadius: "14px",
                textTransform: "none",
                fontWeight: 800,
                fontSize: { xs: "0.86rem", sm: "0.95rem" },
                color: videoType === "ted" ? "#07111c" : "rgba(255,255,255,0.72)",
                bgcolor: videoType === "ted" ? "#22d3ee" : "transparent",
                boxShadow:
                  videoType === "ted"
                    ? "0 12px 32px rgba(34,211,238,0.25)"
                    : "none",
                "&:hover": {
                  bgcolor:
                    videoType === "ted"
                      ? "#22d3ee"
                      : "rgba(255,255,255,0.03)",
                },
              }}
            >
              {isMobile ? "Leksiya" : "Leksiya (Yuz)"}
            </Button>

            <Button
              onClick={() => handleChangeType("course")}
              startIcon={<SchoolRoundedIcon />}
              sx={{
                minHeight: { xs: 46, md: 50 },
                borderRadius: "14px",
                textTransform: "none",
                fontWeight: 800,
                fontSize: { xs: "0.86rem", sm: "0.95rem" },
                color:
                  videoType === "course" ? "#07111c" : "rgba(255,255,255,0.72)",
                bgcolor: videoType === "course" ? "#f59e0b" : "transparent",
                boxShadow:
                  videoType === "course"
                    ? "0 12px 32px rgba(245,158,11,0.24)"
                    : "none",
                "&:hover": {
                  bgcolor:
                    videoType === "course"
                      ? "#f59e0b"
                      : "rgba(255,255,255,0.03)",
                },
              }}
            >
              {isMobile ? "Kurs" : "Dasturlash kursi"}
            </Button>
          </Box>

          {/* Main content */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.05fr 1.35fr" },
              gap: { xs: 1.5, md: 2 },
              alignItems: "stretch",
            }}
          >
            {/* Left panel */}
            <Box
              sx={{
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                bgcolor: "rgba(255,255,255,0.03)",
                p: { xs: 1.6, sm: 1.8, md: 2 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: { xs: "auto", md: 1 },
              }}
            >
              <Stack spacing={2}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.05rem", sm: "1.18rem", md: "1.3rem" },
                      lineHeight: 1.22,
                      fontWeight: 800,
                      color: "#fff",
                    }}
                  >
                    {currentVideo.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      color: "rgba(255,255,255,0.58)",
                      fontSize: { xs: "0.86rem", sm: "0.92rem" },
                      lineHeight: 1.55,
                    }}
                  >
                    {currentVideo.subtitle}
                  </Typography>
                </Box>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isDubbed ? "dubbed" : "original"}
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Chip
                        icon={
                          isDubbed ? (
                            <GraphicEqRoundedIcon />
                          ) : (
                            <PlayCircleFilledRoundedIcon />
                          )
                        }
                        label={
                          isDubbed
                            ? "AI Dublaj (Ruscha)"
                            : "Original (Inglizcha)"
                        }
                        sx={{
                          height: 36,
                          borderRadius: "999px",
                          fontWeight: 800,
                          color: isDubbed ? "#c4b5fd" : "#67e8f9",
                          bgcolor: isDubbed
                            ? "rgba(139,92,246,0.14)"
                            : "rgba(34,211,238,0.14)",
                          border: `1px solid ${
                            isDubbed
                              ? "rgba(139,92,246,0.24)"
                              : "rgba(34,211,238,0.24)"
                          }`,
                          "& .MuiChip-icon": { color: "inherit" },
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <Chip
                    icon={<AutoAwesomeRoundedIcon />}
                    label="Demo rejim"
                    sx={{
                      height: 36,
                      borderRadius: "999px",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.76)",
                      bgcolor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      "& .MuiChip-icon": { color: "inherit" },
                    }}
                  />
                </Stack>

                <Box
                  sx={{
                    borderRadius: "20px",
                    p: 1.5,
                    background: currentVideo.accentSoft,
                    border: `1px solid ${currentVideo.accentBorder}`,
                  }}
                >
                  <Stack direction="row" spacing={1.2} alignItems="flex-start">
                    <SmartDisplayRoundedIcon
                      sx={{
                        color: currentVideo.accent,
                        mt: "2px",
                        fontSize: 22,
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#fff",
                          fontSize: "0.92rem",
                        }}
                      >
                        Interaktiv solishtirish
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.4,
                          color: "rgba(255,255,255,0.62)",
                          fontSize: "0.82rem",
                          lineHeight: 1.5,
                        }}
                      >
                        Bir marta bosib original va AI dublaj o‘rtasida almashing.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row", md: "column", lg: "row" }}
                spacing={1.2}
                sx={{ mt: { xs: 2, md: 3 } }}
              >
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  style={{ width: "100%" }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<CompareArrowsRoundedIcon />}
                    onClick={() => setIsDubbed((prev) => !prev)}
                    sx={{
                      minHeight: 50,
                      borderRadius: "16px",
                      textTransform: "none",
                      fontWeight: 800,
                      fontSize: { xs: "0.9rem", sm: "0.96rem" },
                      color: "#fff",
                      background: isDubbed
                        ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                        : "linear-gradient(135deg, #f59e0b, #f97316)",
                      boxShadow: isDubbed
                        ? "0 14px 30px rgba(99,102,241,0.30)"
                        : "0 14px 30px rgba(249,115,22,0.28)",
                      "&:hover": {
                        background: isDubbed
                          ? "linear-gradient(135deg, #5558ea, #7c3aed)"
                          : "linear-gradient(135deg, #f08c00, #ea580c)",
                      },
                    }}
                  >
                    {isDubbed ? "Originalga o‘tish" : "Dublajni eshitish"}
                  </Button>
                </motion.div>
              </Stack>
            </Box>

            {/* Right panel / video */}
            <Box
              sx={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                bgcolor: "#05070c",
                boxShadow: "0 20px 60px rgba(0,0,0,0.36)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: isTablet ? "16/9" : "16/10",
                  bgcolor: "#000",
                }}
              >
                <iframe
                  key={currentId}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${currentId}?autoplay=1&rel=0&modestbranding=1`}
                  title="Video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>

              <Box
                sx={{
                  p: { xs: 1.3, sm: 1.5 },
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  background:
                    "linear-gradient(180deg, rgba(8,12,20,0.98), rgba(10,16,28,0.98))",
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1}
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#fff",
                        fontSize: { xs: "0.9rem", sm: "0.95rem" },
                      }}
                    >
                      {isDubbed
                        ? "Dublaj versiyasi aktiv"
                        : "Original versiya aktiv"}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.4,
                        color: "rgba(255,255,255,0.52)",
                        fontSize: { xs: "0.77rem", sm: "0.82rem" },
                      }}
                    >
                      AI dubbing sifati va original ovozni tez solishtiring
                    </Typography>
                  </Box>

                  <Chip
                    label={isDubbed ? "Dubbed mode" : "Original mode"}
                    sx={{
                      height: 32,
                      borderRadius: "999px",
                      fontWeight: 700,
                      color: "#fff",
                      bgcolor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />
                </Stack>
              </Box>
            </Box>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}