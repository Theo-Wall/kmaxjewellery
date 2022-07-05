import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import CardDisplay from "../components/CardDisplay";
import axios from "axios";

const LargePieces = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState("");
  const [cards, setCards] = useState([]);
  const [editData, setEditData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setCat("largepieces");
      const response = await axios.get(`/saleItem/cards/largepieces`);
      setCards(response.data);
    };
    fetchData();
  }, []);

  const addHandler = () => {
    setOpen(true);
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
          Large Pieces
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
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
            addHandler();
          }}
        >
          Add
        </Button>
      </Box>
      <CardDisplay
        open={open}
        setOpen={setOpen}
        cat={cat}
        editData={editData}
        setEditData={setEditData}
        cards={cards}
      />
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h4"
          sx={{
            margin: 2,
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          Past Creations
        </Typography>
      </Box>
    </Box>
  );
};

export default LargePieces;
