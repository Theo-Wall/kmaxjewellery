import { Box, Button, Typography } from "@mui/material";
import Image from "../components/Image";
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
            margin: "70px 0 10px 0",
          }}
        />
      </Box>
      <Box>
        <Image
          src={
            "https://res.cloudinary.com/ddcynhc98/image/upload/v1656210507/20220625_201856_q0gyko.jpg"
          }
          alt={"KMAXJewellery logo"}
          loading={"lazy"}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0 10px 0",
            height: { xs: "300px", md: "500px" },
          }}
        />
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          The Return of the Bison
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 600,
            color: theme.palette.primary.main,
            marginLeft: "20px",
          }}
        >
          Absent from our landscape for over 140 years, the heard at Panther
          Valley are now free to roam, breed and birth 'little reds'
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
