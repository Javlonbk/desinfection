import React from "react";
import { FooterContainer } from "./style";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Dizenfeksiya
        </Typography>
        
      </Container>
    </FooterContainer>
  );
};

export default Footer;
