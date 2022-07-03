import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ImageUploading from "react-images-uploading";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./ItemModal.css";

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
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const onSubmit = async (data) => {
    console.log("data", data);
    console.log("images", images);
    // const response = await axios.post("email/sendEmail", data);
    // console.log("response", response);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  //   const [title, description] = watch(["title", "description"]);

  //   console.log("title", title);

  const LocalForm = () => {
    return (
      <>
        <Typography label="title" sx={{ fontWeight: 600 }}>
          Title:
        </Typography>
        <TextField
          fullWidth
          id="title"
          type="text"
          autoFocus
          autoComplete="disabled"
          //   error={errors?.fullName ? true : false}
          //   helperText={errors?.fullName && "Name Required"}
          {...register("title", { required: true, maxLength: 100 })}
          sx={{ mb: "20px" }}
        />
        {/* <Typography label="phone" sx={{ fontWeight: 600 }}>
          Phone Number:
        </Typography>
        <TextField
          fullWidth
          id="phone"
          name="phone"
          type="tel"
          {...register("phoneNo")}
          sx={{ mb: "20px" }}
        /> */}

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
          autoFocus
          //   error={errors?.message ? true : false}
          //   helperText={errors?.message && "Message Required"}
          {...register("description", { required: true })}
          sx={{ mb: "20px" }}
        />
        <Typography label="images" sx={{ fontWeight: 600 }}>
          Upload Images:
        </Typography>
        <ImageUploading
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
        </ImageUploading>
        <Button type="submit" variant="outlined" sx={{ fontWeight: 600 }}>
          Submit Item
        </Button>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <LocalForm />
            {/* <Box>
              <ItemCard title={title} description={description} />
            </Box> */}
          </form>
        </Box>
      </Modal>
    </div>
  );
}
