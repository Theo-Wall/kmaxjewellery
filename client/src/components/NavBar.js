import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "./Logo";
import LoginModal from "./LoginModal";
import axios from "axios";
import { useContext } from "react";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const pages = ["Crumbs", "Creations", "Me", "Contact"];

const NavBar = ({ children, UserContext }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openLogin, setOpenLogin] = React.useState(false);
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLogin = () => setOpenLogin(true);

  const handleLogout = async () => {
    const response = await axios.get("/auth/logout");
    if (response) {
      navigate(0);
    }
  };

  return (
    <>
      <LoginModal open={openLogin} setOpen={setOpenLogin} user={user} />
      <Box>
        <AppBar
          position="fixed"
          sx={{ background: "white", m: 0, boxShadow: 0 }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Logo />
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
                        onClick={() => {
                          navigate(`/${page.toLowerCase()}`);
                        }}
                        textAlign="center"
                        sx={{ fontWeight: 800 }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Logo mobileView={true} />
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => {
                      navigate(`/${page.toLowerCase()}`);
                    }}
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                      fontSize: "24px",
                      "&:hover": {
                        background: "none",
                        borderRadius: 0,
                        borderBottom: "2px solid #AC1F2D",
                      },
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Instagram">
                  <IconButton
                    onClick={() => {
                      window.open(
                        "https://www.instagram.com/kmkry1/",
                        "_blank"
                      );
                    }}
                    sx={{
                      p: 0,
                      ":hover": {
                        cursor: "pointer",
                        color: theme.palette.secondary.main,
                      },
                    }}
                  >
                    <InstagramIcon
                      sx={{ fontSize: { xs: "40px", mb: "50px" } }}
                    />
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
            mb: 2,
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
              Copyright &copy;&nbsp;
            </Typography>
            <Logo year={true} mobileView={true} />
            <Logo year={true} />
            {user.emailAddress ? (
              <Button
                size="small"
                onClick={() => {
                  handleLogout();
                }}
              >
                Log Out
              </Button>
            ) : (
              <Button
                size="small"
                onClick={() => {
                  handleOpenLogin();
                }}
                sx={{
                  "&:hover": {
                    background: "none",
                    borderRadius: 0,
                  },
                }}
              >
                Admin
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default NavBar;
