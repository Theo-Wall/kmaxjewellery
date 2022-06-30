import { Box, Typography, Button, Grid } from "@mui/material";
import { useState } from "react";
import ItemModal from "../components/ItemModal";
import { useTheme } from "@emotion/react";

const NeckPieces = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState("");

  const addHandler = (cat) => {
    console.log("cat", cat);
    setCat(cat);
    setOpen(true);
  };

  return (
    <>
      <ItemModal open={open} setOpen={setOpen} cat={cat} />
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
            Neckpieces, Necklaces & Pendants
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="h4"
            sx={{
              margin: 2,
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            New Creations
          </Typography>
          <Button
            onClick={() => {
              addHandler("neckpieces");
            }}
          >
            Add
          </Button>
        </Box>
        <Box sx={{ display: "flex", margin: 2 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
          >
            {/* {categories.map((cat, index) => {
            return (
              <Grid item>
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
          })} */}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default NeckPieces;
