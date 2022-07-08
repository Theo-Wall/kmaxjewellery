import * as React from "react";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function LoginModal({ open, setOpen, user }) {
  const handleClose = () => setOpen(false);

  const onSubmit = async (data) => {
    const response = await axios.post("/auth/login", data);
    if (response) {
      console.log("response.data", response.data);
      user.setUser(response.data);
      setOpen(false);
    }
  };

  const { register, handleSubmit } = useForm();

  const LocalForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography label="emailAddress" sx={{ fontWeight: 600 }}>
            User Name:
          </Typography>
          <TextField
            fullWidth
            id="emailAddress"
            type="text"
            size="small"
            autoComplete="disabled"
            {...register("emailAddress", { required: true, maxLength: 100 })}
            sx={{ mb: "20px" }}
          />
          <Typography label="password" sx={{ fontWeight: 600 }}>
            Password:
          </Typography>
          <TextField
            fullWidth
            id="password"
            type="text"
            size="small"
            autoComplete="disabled"
            {...register("password", { required: true, maxLength: 100 })}
            sx={{ mb: "20px" }}
          />
          <Button type="submit" variant="outlined">
            Submit
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
            Admin Login
          </Typography>
          <LocalForm />
        </Box>
      </Modal>
    </div>
  );
}
