import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, Box } from "@mui/material";
import { HeroText, StandarText } from "../Text/Text";
import { Card, ServicesContainer } from "./style";
import bacteriaImg from '../../assets/png/dizinfeksiya1.png'
import insectImg from '../../assets/png/dizinfeksiya2.png'
import rodentImg from '../../assets/png/dizinfeksiya3.png'

const Services = () => {
  const { t } = useTranslation();

  const data = [
    {
      imgSrc: bacteriaImg,
      heading: t("serviceItems.decontamination.heading"),
      title: t("serviceItems.decontamination.title")
    },
    {
      imgSrc: insectImg,
      heading: t("serviceItems.insectControl.heading"),
      title: t("serviceItems.insectControl.title")
    },
    {
      imgSrc: rodentImg,
      heading: t("serviceItems.rodentControl.heading"),
      title: t("serviceItems.rodentControl.title")
    }
  ];

  return (
    <ServicesContainer>
      <Container>
        <Box sx={{ width: "200px" }}>
          <HeroText>{t("services.title")}</HeroText>
          <StandarText style={{ marginTop: "20px" }}>
            {t("services.description")}
          </StandarText>
        </Box>
        <Box>
          {data.map((item, index) => (
            <Card key={index}>
              <Card.Image src={item.imgSrc} />
              <div>
                <HeroText>{item.heading}</HeroText>
                <StandarText style={{ marginTop: '20px' }}>
                  {item.title}
                </StandarText>
              </div>
            </Card>
          ))}
        </Box>
      </Container>
    </ServicesContainer>
  );
};

export default Services;
