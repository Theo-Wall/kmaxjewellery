import { Typography, Box, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

const Crumbs = () => {
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
          Crumbs&nbsp;
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: theme.palette.primary.main,
            display: { xs: "none", md: "flex" },
          }}
        >
          Presents small bites of resourceful information
        </Typography>
      </Box>
      <Box sx={{ marginLeft: "24px" }}>
        <Typography
          variant="h4"
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          Discovering the potential of snow! Using the lost wax method in my
          practice.
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Typography
              variant="h6"
              display="break"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                marginBottom: "10px",
              }}
            >
              Creating Canadian Snow Cast, eh! Glacialis I and II snow themed
              wearable jewellery objects.
            </Typography>
            <Typography
              variant="h6"
              display="break"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                marginBottom: "10px",
              }}
            >
              The idea to drizzle wax in snow brought memories of my childhood,
              making maple taffy, which is mostly an Eastern Canadian tradition.
            </Typography>
            <Typography
              variant="h6"
              display="break"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                marginBottom: "10px",
              }}
            >
              Canadian Snow Cast, eh! Glacialis I and II Series is one line of
              jewellery in my practice lead research. Once cast, the appearance
              of Glacialis I 'Esker' referenced an ice flow or a retreating
              glacier. When researching glaciers, I discovered the
              glacio-fluvial and esker deposits, which reveals rounding of
              individual particles since they have been re-worked by melt-water
              or display long, sinuous ridges, similar in appearance to the
              irregular wax impressions and cast structures.
            </Typography>
            <Typography
              variant="h6"
              display="break"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                marginBottom: "10px",
              }}
            >
              For this jewellery project I have been recording stats such as the
              physical properties of the snow and the different wax types to
              learn which wax is best. When heated some wax and blends of wax
              viscosity differ which affects the pour, but also reveal their
              tensile strength. I can only control the movement not the result;
              the wax flows according to the structure of the snow. I give
              permanence to the snow, while the glaciers are melting due to
              climate fluctuation.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                marginBottom: "10px",
              }}
            >
              I reveal the physical and aesthetic properties of wax, snow and
              metal in order to invite a deeper reflection on our environment.
              Through the transformation of the hot-cold and solid-liquid
              process, a tension forms between the snow and the wax, and again
              during the casting stage with the heating of the metal. A dynamic
              relationship of the materials changing and bonding is present in
              the wax, snow and metal by these alterations as new structures are
              formed. The tangible and the ephemeral enter into a dialogue.
            </Typography>
            <Typography
              variant="h6"
              display="break"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                marginBottom: "10px",
              }}
            >
              This body of work is intended as a series commenting on glaciers.
              Glaciers are always in motion and are very sensitive to climate
              fluctuation, the extent of the ice and its flow pattern are
              dynamic properties. I give conceptual meaning to my material
              explorations. As I continue to work with snow creating glacier
              type designs I will be reminded of the changes to the ancient art
              of lost wax casting and the changes to our environment. Both
              topics reveal much about the past and the future.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Crumbs;
