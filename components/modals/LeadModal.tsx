"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

type LeadModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function LeadModal({ open, onClose }: LeadModalProps) {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "+998",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "+998",
          email: "",
        });

        setTimeout(() => {
          setStatus("idle");
          onClose();
        }, 1500);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      TransitionComponent={Fade}
      PaperProps={{
        sx: {
          borderRadius: "24px",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, rgba(8,15,30,0.96), rgba(20,25,45,0.96))",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          color: "#fff",
          boxShadow: "0 20px 80px rgba(0,0,0,0.45)",
        },
      }}
    >
      <DialogTitle
        sx={{
          px: 3,
          pt: 3,
          pb: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          direction: isRtl ? "rtl" : "ltr",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={800}>
            {t("form.title")}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 0.5 }}>
            {t("form.description")}
          </Typography>
        </Box>

        <IconButton
          onClick={onClose}
          sx={{
            color: "#fff",
            bgcolor: "rgba(255,255,255,0.06)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.12)", transform: "rotate(90deg)" },
            transition: "all 0.3s ease",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pb: 3 }}>
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          onSubmit={handleSubmit}
        >
          <Stack spacing={2.2} mt={1}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <motion.div whileHover={{ scale: 1.01 }} style={{ width: "100%" }}>
                <TextField
                  fullWidth
                  required
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  placeholder={t("form.firstName")}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "#7dd3fc" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={fieldSx}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} style={{ width: "100%" }}>
                <TextField
                  fullWidth
                  required
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  placeholder={t("form.lastName")}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "#7dd3fc" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={fieldSx}
                />
              </motion.div>
            </Stack>

            <motion.div whileHover={{ scale: 1.01 }}>
              <TextField
                fullWidth
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder={t("form.phone")}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon sx={{ color: "#7dd3fc" }} />
                    </InputAdornment>
                  ),
                }}
                sx={fieldSx}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <TextField
                fullWidth
                required
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder={t("form.email")}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "#7dd3fc" }} />
                    </InputAdornment>
                  ),
                }}
                sx={fieldSx}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.015, y: -2 }} whileTap={{ scale: 0.985 }}>
              <Button
                type="submit"
                fullWidth
                disabled={loading}
                sx={{
                  py: 1.7,
                  borderRadius: "18px",
                  fontWeight: 800,
                  textTransform: "none",
                  fontSize: "1rem",
                  color: "#fff",
                  background:
                    loading
                      ? "linear-gradient(90deg, #475569, #64748b)"
                      : "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)",
                  boxShadow: "0 12px 30px rgba(59,130,246,0.25)",
                }}
              >
                {loading ? t("form.sending") : t("form.send")}
              </Button>
            </motion.div>

            {status === "success" && (
              <Box
                sx={{
                  bgcolor: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  color: "#6ee7b7",
                  px: 2,
                  py: 1.5,
                  borderRadius: "14px",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                {t("form.success")}
              </Box>
            )}

            {status === "error" && (
              <Box
                sx={{
                  bgcolor: "rgba(239,68,68,0.12)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  color: "#fca5a5",
                  px: 2,
                  py: 1.5,
                  borderRadius: "14px",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                {t("form.error")}
              </Box>
            )}
          </Stack>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "18px",
    color: "#fff",
    background: "rgba(255,255,255,0.05)",
    transition: "all 0.3s ease",
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.10)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(34,211,238,0.45)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#22d3ee",
      boxShadow: "0 0 0 4px rgba(34,211,238,0.08)",
    },
  },
  "& input::placeholder": {
    color: "rgba(255,255,255,0.55)",
    opacity: 1,
  },
};