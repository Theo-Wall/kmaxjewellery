import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ImageUploading from "react-images-uploading";
import { useState } from "react";
import { useForm } from "react-hook-form";
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

export default function ItemModal({ open, setOpen, cat }) {
  const handleClose = () => setOpen(false);

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (event) => {
    // data for submit
    console.log(event.target.files);
    setImages(event.target.files);
  };

  const onSubmit = async (data) => {
    data.category = cat;
    const itemData = new FormData();
    itemData.append("image", images);
    itemData.append("formData", JSON.stringify(data));

    const createPostResponse = await axios.post("/saleItem/upload", itemData);
    console.log("createPostResponse", createPostResponse);
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
        <input
          id="photos"
          type="file"
          name="image"
          accept="image/*"
          onChange={(event) => setImages(event.target.files[0])}
          multiple={false}
        />
        {/* {images.map((image) =>
          console.log("image", image) */}
        {/* <img src={images.webkitRelativePath} alt="" width="100" /> */}
        {/* )} */}

        {/* <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography label="title" sx={{ fontWeight: 600 }}>
            Title:
          </Typography>
          <TextField
            fullWidth
            id="title"
            type="text"
            autoComplete="disabled"
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
            {...register("description", { required: true })}
            sx={{ mb: "20px" }}
          />
          <Typography label="images" sx={{ fontWeight: 600 }}>
            Upload Images:
          </Typography>
          <Button type="submit" variant="outlined" sx={{ fontWeight: 600 }}>
            Submit Item
          </Button>
        </form>
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
