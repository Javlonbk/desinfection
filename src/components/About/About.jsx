import React from "react";
import { useTranslation } from 'react-i18next';
import { Button, Container } from "@mui/material";
import ButtonPrimary from "../Button/Button";
import { StandarText } from "../Text/Text";
import { AboutContainer, ImageContainer } from "./style";

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer >
      <Container sx={{ display: "flex", justifyContent:"space-between"}}>
        <div className='about-info' data-aos="fade-right">
          <h1>{t('about.title')}</h1>
          <StandarText white>{t('about.description')}</StandarText>
          <ButtonPrimary/>
        </div>
      </Container>
    </AboutContainer>
  );
};

export default About;
