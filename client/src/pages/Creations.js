import { Typography, Box, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import CatCard from "../components/CatCard";

const categories = [
  { name: "Neck", img: "/images/glacialis_327x327.jpeg", page: "neckpieces" },
  {
    name: "Lapel",
    img: "/images/victorian_brooch_327x327.jpeg",
    page: "lapel",
  },
  { name: "Essentials", img: "/images/17_327x327.jpeg", page: "essentials" },
  {
    name: "Large Objects",
    img: "/images/18_327x327.jpeg",
    page: "largepieces",
  },
];

const Creations = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const displayItemsHandler = (cat) => {
    navigate(`/creations/${cat.page}`);
  };

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
      <Box sx={{ display: "flex", margin: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
        >
          {categories.map((cat, index) => {
            return (
              <Grid item key={`${cat} ${index}`}>
                <Box
                  onClick={(e) => {
                    displayItemsHandler(cat);
                  }}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <CatCard key={cat.name} name={cat.name} img={cat.img} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Creations;
