import { Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const Crumbs = () => {
  const theme = useTheme();
  return (
    <Box sx={{ margin: "100px 140px 100px 140px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          padding: "0 15px 0 15px",
          borderBottom: "1px solid lightGrey",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Crumbs&nbsp;
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: theme.palette.primary.main }}
        >
          Presents small bites of resourceful information
        </Typography>
      </Box>
    </Box>
  );
};

export default Crumbs;
