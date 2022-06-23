import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useForm } from "react-hook-form";
import { useTheme } from "@emotion/react";
import axios from "axios";
// import { useSendEmail } from "../hooks/useSendEmail";

const Contact = () => {
  const theme = useTheme();

  const LocalForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
      console.log("data", data);
      const response = await axios.post("email/sendEmail", data);
      console.log("response", response);
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography label="fname">Full Name:</Typography>
        <TextField
          fullWidth
          id="fname"
          type="text"
          autoComplete="disabled"
          error={errors?.fullName ? true : false}
          helperText={errors?.fullName && "Name Required"}
          {...register("fullName", { required: true, maxLength: 100 })}
          sx={{ mb: "20px" }}
        />
        <Typography label="phone">Phone Number:</Typography>
        <TextField
          fullWidth
          id="phone"
          name="phone"
          type="tel"
          {...register("phoneNo")}
          sx={{ mb: "20px" }}
        />
        <Typography label="email">Email Address:</Typography>
        <TextField
          fullWidth
          id="email"
          name="email"
          type="email"
          error={errors?.email ? true : false}
          helperText={errors?.email && "Email Required"}
          {...register("email", { required: true, maxLength: 100 })}
          sx={{ mb: "20px" }}
        />
        <Typography label="message">Message:</Typography>
        <TextField
          fullWidth
          id="message"
          name="message"
          type="text"
          multiline
          rows={10}
          error={errors?.message ? true : false}
          helperText={errors?.message && "Message Required"}
          {...register("message", { required: true })}
          sx={{ mb: "20px" }}
        />
        <Button type="submit" variant="outlined">
          Send Message
        </Button>
      </form>
    );
  };

  return (
    <Box sx={{ margin: "100px 15px 100px 15px" }}>
      <Box
        sx={{ padding: "0 15px 0 15px", borderBottom: "1px solid lightGrey" }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600, ml: "40px" }}>
          Contact
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              m: "20px 55px 10px 55px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                fontSize: "24px",
                mb: "20px",
              }}
            >
              Send Us a Message
            </Typography>
            <LocalForm />
          </Box>
        </Grid>
        <Grid item md={5} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ m: "20px 0 10px 55px" }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                fontSize: "24px",
                mb: "20px",
              }}
            >
              Contact Details
            </Typography>
            <Box sx={{ display: "flex" }}>
              <EmailIcon />
              <Typography>&nbsp;E:</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
