import { Box, Grid } from "@mui/material";
import ItemModal from "../components/ItemModal";
import ItemCard from "../components/ItemCard";
import { useNavigate } from "react-router-dom";

const CardDisplay = ({
  open,
  setOpen,
  cat,
  editData,
  setEditData,
  cards,
  UserContext,
}) => {
  const navigate = useNavigate();
  const handleDisplay = (item) => {
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
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {cards.map((item, index) => {
            return (
              <Grid item key={`${cat} ${index}`}>
                <Box>
                  <ItemCard
                    item={item}
                    setOpen={setOpen}
                    setEditData={setEditData}
                    handleDisplay={handleDisplay}
                    UserContext={UserContext}
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
