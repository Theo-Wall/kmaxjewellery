import { Box, Typography } from "@mui/material";

import { useTheme } from "@emotion/react";

const LargePieces = () => {
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
          Large Pieces
        </Typography>
      </Box>
    </Box>
  );
};

export default LargePieces;
