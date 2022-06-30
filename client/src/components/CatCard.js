import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CatCard({ name, img }) {
  return (
    <Card sx={{ width: "300px", height: "350px" }}>
      <CardMedia component="img" height="250" image={img} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="secondary">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
