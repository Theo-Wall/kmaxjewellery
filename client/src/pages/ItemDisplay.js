import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import Image from "../components/Image";
import axios from "axios";
const ItemDisplay = () => {
  const theme = useTheme();
  const id = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/saleItem/${JSON.stringify(id)}`);
      setItem(response.data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Box sx={{ margin: "100px 15px 15px 15px" }}>
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
            {item ? item.title : ""}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            ml: "50px",
            mt: "20px",
            color: theme.palette.primary.main,
          }}
        >
          {item ? item.description : ""}
        </Typography>
      </Box>

      {/* </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "200px",
          ml: "50px",
        }}
      > */}
      <Image
        src={item?.images[0]}
        alt={"item here"}
        loading={"lazy"}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0 10px 0",
          height: "400px",
        }}
      />
    </>
  );
};

export default ItemDisplay;
