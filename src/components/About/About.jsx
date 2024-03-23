import React from "react";
import { useTranslation } from 'react-i18next';
import { Button, Container, Typography } from "@mui/material";
import ButtonPrimary from "../Button/Button";
import { StandarText } from "../Text/Text";
import { AboutContainer } from "./style";

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer >
      <Container sx={{ display: "flex", justifyContent:"space-between"}}>
        <div className='about-info' data-aos="fade-right">
          <Typography sx={{fontSize: {xs:"28px", fontWeight:'700', sm:"64px"}, lineHeight:{xs:"32px", sm:"72px"}, marginTop:"100px", letterSpacing:"10px"}}>{t('about.title')}</Typography>
          <StandarText white>{t('about.description')}</StandarText>
          <ButtonPrimary  />
        </div>
      </Container>
    </AboutContainer>
  );
};

export default About;
