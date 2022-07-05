import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./ItemModal.css";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function ItemModal({ open, setOpen, cat, editData }) {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    navigate(0);
  };

  const [images, setImages] = useState([]);

  const onSubmit = async (data) => {
    data.category = cat;
    const itemData = new FormData();
    itemData.append("image", images);
    itemData.append("formData", JSON.stringify(data));
    if (editData) {
      const editPostResponse = await axios.post(
        `/saleItem/edit/${editData._id}`,
        itemData
      );
      if (editPostResponse) {
        navigate(0);
      }
    } else {
      const createPostResponse = await axios.post("/saleItem/upload", itemData);
      if (createPostResponse) {
        navigate(0);
      }
    }
  };

  const {
    register,
    handleSubmit,
    // formState: { errors },
    // watch,
  } = useForm();

  const LocalForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography label="title" sx={{ fontWeight: 600 }}>
            Title:
          </Typography>
          <TextField
            fullWidth
            id="title"
            type="text"
            autoComplete="disabled"
            defaultValue={editData ? editData.title : ""}
            {...register("title", { required: true, maxLength: 100 })}
            sx={{ mb: "20px" }}
          />

          <Typography label="description" sx={{ fontWeight: 600 }}>
            Description:
          </Typography>
          <TextField
            fullWidth
            id="description"
            name="description"
            type="text"
            multiline
            rows={10}
            defaultValue={editData ? editData.description : ""}
            {...register("description", { required: true })}
            sx={{ mb: "20px" }}
          />
          <Button type="submit" variant="outlined" sx={{ fontWeight: 600 }}>
            {editData ? "Submit Edit" : "Submit Item"}
          </Button>
        </form>
        <Typography label="images" sx={{ fontWeight: 600 }}>
          Upload Images:
        </Typography>
        <input
          id="photos"
          type="file"
          name="image"
          accept="image/*"
          onChange={(event) => setImages(event.target.files[0])}
          multiple={false}
        />
      </>
    );
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new item in {cat}
          </Typography>

          <LocalForm />
          {/* <Box>
              <ItemCard title={title} description={description} />
            </Box> */}
        </Box>
      </Modal>
    </div>
  );
}
