import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import Image from "../components/Image";
import axios from "axios";
const ItemDisplay = () => {
  const theme = useTheme();
  const id = useParams();

  const [item, setItem] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/saleItem/${JSON.stringify(id)}`);
      setImages(response.data.images);
      setItem(response.data);
    };
    fetchData();
  }, [id]);

  console.log("item", item?.description);
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
          // display="inline"
          sx={{
            whiteSpace: "pre-line",
            fontWeight: 600,
            ml: "50px",
            mt: "20px",
            color: theme.palette.primary.main,
          }}
        >
          {item ? item.description : ""}
        </Typography>
      </Box>
      <Box sx={{ height: "500px" }}>
        <Carousel>
          {images.map((image, i) => {
            return (
              <Box sx={{ height: "400px" }} key={i}>
                <Image
                  src={image}
                  alt={"item here"}
                  loading={"lazy"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px 0 10px 0",
                    height: "400px",
                  }}
                />
              </Box>
            );
          })}
        </Carousel>
      </Box>
    </>
  );
};

export default ItemDisplay;
