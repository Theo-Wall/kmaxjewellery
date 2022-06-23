import { Typography, Box, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTheme } from "@emotion/react";

const Contact = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const LocalForm = () => {
    return (
      <>
        <Typography>form</Typography>
      </>
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
        <Grid item xs={7}>
          <Box
            sx={{
              m: "20px 0 10px 55px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                color: theme.palette.primary.main,
                fontSize: "24px",
              }}
            >
              Send Us a Message
            </Typography>
            <LocalForm />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ m: "20px 0 10px 55px" }}>
            <Typography>other side</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
