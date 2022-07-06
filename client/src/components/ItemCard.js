import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";

export default function ItemCard({
  item,
  setOpen,
  setEditData,
  handleDisplay,
}) {
  const handleEdit = (item) => {
    setEditData(item);
    setOpen(true);
  };

  const handleDelete = async (item) => {
    const response = await axios.delete(`/saleItem/delete/${item._id}`);
  };

  return (
    <Card sx={{ width: "300px", height: "500px" }}>
      <CardMedia
        component="img"
        height="280"
        image={item.images[0]}
        alt={item.title}
        onClick={() => {
          handleDisplay(item);
        }}
        sx={{ "&:hover": { cursor: "pointer" } }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          onClick={() => {
            handleDisplay(item);
          }}
          sx={{ "&:hover": { cursor: "pointer" } }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "5",
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            handleEdit(item);
          }}
        >
          Edit
        </Button>
        <Button
          size="small"
          onClick={() => {
            handleDelete(item);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
