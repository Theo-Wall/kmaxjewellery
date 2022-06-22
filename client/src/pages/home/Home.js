import { Box, Button, Typography } from "@mui/material";
import Image from "../../components/Image";
import { useTheme } from "@emotion/react";

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Image
          src={"images/logo_final.png"}
          alt={"KMAXJewellery logo"}
          loading={"lazy"}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "100px 0 100px 0",
          }}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "200px 0 200px 0",
          }}
        >
          Pick Image for here
        </Typography>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          Description of image
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          subtext for image
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", p: "30px 0 100px 0" }}
      >
        <Button
          variant="outlined"
          sx={{ color: theme.palette.primary.main, fontWeight: 800 }}
        >
          Read More
        </Button>
      </Box>
    </>
  );
};

export default Home;
