import { Box, Grid } from "@mui/material";
import ItemModal from "../components/ItemModal";
import ItemCard from "../components/ItemCard";
import { useNavigate } from "react-router-dom";

const CardDisplay = ({ open, setOpen, cat, editData, setEditData, cards }) => {
  const navigate = useNavigate();
  const handleDisplay = (item) => {
    console.log("e", item);
    navigate(`/creations/display/${item._id}`);
  };

  return (
    <>
      <ItemModal
        open={open}
        setOpen={setOpen}
        cat={cat}
        editData={editData}
        setEditData={setEditData}
      />
      <Box sx={{ display: "flex", margin: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          {cards.map((item, index) => {
            return (
              <Grid item key={`${cat} ${index}`}>
                <Box
                  onClick={() => {
                    handleDisplay(item);
                  }}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <ItemCard
                    item={item}
                    setOpen={setOpen}
                    setEditData={setEditData}
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default CardDisplay;
