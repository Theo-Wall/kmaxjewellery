import { Typography, Box, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "../components/Image";

const Me = () => {
  const theme = useTheme();
  return (
    <Box sx={{ margin: "100px 0 100px 0" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "flex" } }}>
          <Image
            src={"images/the_artist_image_1.jpeg"}
            alt={"artist image"}
            loading={"lazy"}
            width={"350px"}
            sx={{ ml: "24px" }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ padding: "20px 100px 20px 100px" }}>
            <Typography
              variant="h3"
              sx={{
                borderBottom: "1px solid lightGrey",
                fontWeight: 600,
                color: theme.palette.primary.main,
                marginBottom: "40px",
              }}
            >
              Karen Maxine Kryzan
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                marginBottom: "10px",
              }}
            >
              Artist Statement
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                marginBottom: "10px",
              }}
            >
              The process to creating in any art form is both intuitive and
              experimental. Creating small scale sculpture for decorative,
              functional, or wearable purposes is my intention. As a maker, I am
              passionate about materials, creating my own designs, problem
              solving, and expressing these ideas by constructing one-of-a-kind
              objects.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ paddingLeft: "24px" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                marginBottom: "10px",
              }}
            >
              A variety of environments influence my designs. I capture the
              negative space shapes between tree branches by creating pendants
              or brooches. Bird motifs have appeared in my magpie-etched cuff
              bracelets, anodized aluminum pins and earrings, and hoop
              necklaces. I am also influenced by my farming roots, travel, and
              historical periods including my European, Scottish, and Métis
              ancestry. My other influences are conceived from periods I have
              studied in Art History such as the Baroque, Victorian and
              Contemporary eras.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                marginBottom: "10px",
              }}
            >
              My work is divided into three distinct lines: contemporary,
              historical, and Canadiana. The contemporary line consists of a
              pendant style called Just Jasper and uses plexi-glass as a base
              for the Jasper stone with a sterling silver pierced bezel. The
              historical line of Victorian brooches with a bezel-set Labradorite
              stone is a re-design from images of antique cabinet drawer back
              plates. The Canadiana line is cast snow called Canadian Snow Cast,
              eh! and consists of Glacialis I and II neck pieces and Snow Drop
              pendants.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Me;
