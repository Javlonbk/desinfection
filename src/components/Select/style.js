import styled from 'styled-components'

export const LanguageControlContainer = styled.div`
height: 40px;
margin-right: 20px;
display: flex;
justify-content: center;
`

{/* <AppBar
sx={{
  backgroundColor: "#fff",
  color: "#000",
  height: "80px",
  marginTop: "0px",
}}
>
<Container maxWidth="xl">
  <Toolbar
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Box
      sx={{ display: "flex", alignItems: "center", color: "#2257bf" }}
    >
      <img
        src={logo}
        style={{ width: "60px", marginTop: "10px" }}
        alt=""
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sm={{
          display: "static",
        }}
        sx={{
          display: "none",
          ms: 2,
          mr: 3,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "inherit",
          textDecoration: "none",
          color: "#2257bf",
        }}
      >
        {t("navbar.appTitle")}
      </Typography>
    </Box>

    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          onClick={() => handleMenuItemClick(item.key)}
          style={{
            margin: "0 16px",
            fontSize: "15px",
            color: activeItem === item.key ? "#2257bf" : "#000",
            textDecoration: "none",
            borderBottom:
              activeItem === item.key ? "2px solid #2257bf" : "none",
            transition: "border-color 0.3s ease-out",
          }}
        >
          {item.label}
        </a>
      ))}
    </Box>

    <LanguageControl />

    <ButtonPrimary />
    <Box
      sx={{
        width: "auto",
        display: { xs: "flex", md: "none" },
        justifyContent: "end",
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="#2257bf"
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
                margin: "0 16px",
                fontSize: "15px",
                color: activeItem === item.key ? "#2257bf" : "#000",
                textDecoration: "none",
                borderBottom:
                  activeItem === item.key
                    ? "2px solid #2257bf"
                    : "none",
                transition: "border-color 0.3s ease-out",
              }}
            >
              {item.label}
            </a>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  </Toolbar>
</Container>
</AppBar> */}