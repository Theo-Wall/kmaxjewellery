import { Typography, Box, Grid } from "@mui/material";
import Image from "../components/Image";

const Me = () => {
  return (
    <Box sx={{ margin: "100px 0 100px 0" }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Image
            src={"images/the_artist_image_1.jpeg"}
            alt={"artist image"}
            loading={"lazy"}
            sx={{ ml: "24px" }}
          />
        </Grid>
        <Grid item xs={7}>
          <Typography>intro</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Me;
