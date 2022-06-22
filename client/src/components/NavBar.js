import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@emotion/react";

const pages = ["Crumbs", "Creations", "Me", "Contact"];

const NavBar = ({ children }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box>
        <AppBar
          position="fixed"
          sx={{ background: "white", m: 0, boxShadow: 0 }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 800,
                  color: theme.palette.secondary.main,
                  textDecoration: "none",
                  margin: "0",
                }}
              >
                KMAX
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 800,
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                }}
              >
                Jewellery
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        sx={{ fontFamily: "Fira Sans", fontWeight: 800 }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  fontWeight: 800,
                  color: theme.palette.secondary.main,
                  textDecoration: "none",
                  margin: "0",
                }}
              >
                KMAX
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  fontWeight: 800,
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                }}
              >
                Jewellery
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: theme.palette.primary.main,
                      display: "block",
                      fontWeight: 700,
                      fontSize: "24px",
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Instagram">
                  <IconButton /*onClick={}*/ sx={{ p: 0 }}>
                    <InstagramIcon sx={{ fontSize: "50px" }} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box>{children}</Box>
        <Box
          sx={{
            height: "100px",
            m: 2,
            borderTop: "1px solid lightGrey",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "35px",
            }}
          >
            <Typography
              variant="h6"
              component="a"
              sx={{
                fontWeight: 800,
                color: theme.palette.primary.main,
                textDecoration: "none",
              }}
            >
              Copyright &copy;
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 800,
                color: theme.palette.secondary.main,
                textDecoration: "none",
                margin: "0",
              }}
            >
              KMAX
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 800,
                color: theme.palette.primary.main,
                textDecoration: "none",
              }}
            >
              Jewellery | {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default NavBar;
