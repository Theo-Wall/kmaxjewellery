import { Box } from "@mui/material";

const Image = ({ src, alt, loading, sx }) => {
  return (
    <Box sx={sx}>
      <img src={src} alt={alt} loading={loading} />
    </Box>
  );
};

export default Image;
