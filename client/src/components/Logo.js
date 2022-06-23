import { Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const Logo = ({ year, mobileView }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box
      onClick={() => {
        navigate("/");
      }}
      sx={{
        display: "flex",
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: mobileView
            ? { xs: "flex", md: "none" }
            : { xs: "none", md: "flex" },
          fontWeight: 800,
          color: theme.palette.secondary.main,
          textDecoration: "none",
          margin: "0",
        }}
      >
        KMAX
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: mobileView
            ? { xs: "flex", md: "none" }
            : { xs: "none", md: "flex" },
          fontWeight: 800,
          color: theme.palette.primary.main,
          textDecoration: "none",
        }}
      >
        jewellery{year && ` |  ${new Date().getFullYear()}`}
      </Typography>
    </Box>
  );
};

export default Logo;
