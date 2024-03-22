import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import ButtonPrimary from "../Button/Button";
import LanguageControl from "../Select/LanguageControl";
import { useTranslation } from 'react-i18next';
import logo from '../../assets/svg/logo.svg';

function Navbar() {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (itemKey) => {
    setActiveItem(itemKey);
    handleCloseNavMenu();
  };

  // Define navigation items
  const navItems = [
    { key: 'home', label: t('navbar.home'), href: '/' },
    { key: 'services', label: t('navbar.services'), href: '#services' },
    { key: 'aboutUs', label: t('navbar.aboutUs'), href: '#about' },
    { key: 'faq', label: t('navbar.faq'), href: '#faq' }
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", color: "#000", height:'80px', marginTop:'0px'}}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems:'center', color:'#2257bf'}}>
            <img src={logo} style={{width:'60px', marginTop:'10px'}} alt="" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ms: 2,
                mr: 3,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
                color:'#2257bf'
              }}
            >
              {t('navbar.appTitle')}
            </Typography>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='#2257bf'
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
                color: "#000",
                display: { xs: "block", md: "none" },
              }}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.key}
                  onClick={() => handleMenuItemClick(item.key)}
                >
                   <a
                key={item.key}
                href={item.href}
                onClick={() => handleMenuItemClick(item.key)}
                style={{
                  margin: '0 16px',
                  fontSize:'15px',
                  color: activeItem === item.key ? '#2257bf' : '#000',
                  textDecoration: 'none',
                  borderBottom: activeItem === item.key ? '2px solid #2257bf' : 'none',
                  transition: 'border-color 0.3s ease-out', 
                }}
              >
                {item.label}
              </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{display:{xs:'flex', md:'none'}, alignItems:'center', color:'#2257bf'}}>
            <img src={logo} style={{width:'60px', marginTop:'10px'}} alt="" />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color:'#2257bf',
                textDecoration: "none",
                borderBottom: activeItem === 'home' ? '2px solid #2257bf' : 'none', // Apply underline for the active item
                transition: 'border-color 0.3s ease-out', // Add transition effect
              }}
            >
              {t('navbar.appTitle')}
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => handleMenuItemClick(item.key)}
                style={{
                  margin: '0 16px',
                  fontSize:'15px',
                  color: activeItem === item.key ? '#2257bf' : '#000',
                  textDecoration: 'none',
                  borderBottom: activeItem === item.key ? '2px solid #2257bf' : 'none',
                  transition: 'border-color 0.3s ease-out', 
                }}
              >
                {item.label}
              </a>
            ))}
          </Box>

          <LanguageControl />

          <ButtonPrimary />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
