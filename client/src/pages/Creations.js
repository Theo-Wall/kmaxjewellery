import { Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import MediaCard from "../components/MediaCard";

const categories = ["Neck", "Lapel", "Essentials", "Large Objects"];

const Creations = () => {
  const theme = useTheme();
  return (
    <Box sx={{ margin: "100px 15px 100px 15px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          padding: "0 15px 0 15px",
          borderBottom: "1px solid lightGrey",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            ml: "50px",
            color: theme.palette.primary.main,
          }}
        >
          Featuring
        </Typography>
      </Box>
      <Box sx={{ margin: 2 }}>
        <MediaCard />
      </Box>
    </Box>
  );
};

export default Creations;
