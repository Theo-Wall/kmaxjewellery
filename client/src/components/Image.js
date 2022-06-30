import { Box } from "@mui/material";

const Image = ({ src, alt, loading, sx, width }) => {
  return (
    <Box sx={sx}>
      <img src={src} alt={alt} loading={loading} width={width} />
    </Box>
  );
};

export default Image;
