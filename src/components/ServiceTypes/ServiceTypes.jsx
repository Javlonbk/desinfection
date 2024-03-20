import React from "react";
import { useMediaQuery, Container, Box } from "@mui/material";
import { HeroText, MediumText, StandarText } from "../Text/Text";
import ButtonPrimary from "../Button/Button";
import { ServiceTypesContainer, Card } from "./style";
import { getTranslatedServices } from "./services";
import Carousel from "react-material-ui-carousel";
import { useTranslation } from "react-i18next";

const ServiceTypes = () => {

  const {t} = useTranslation();

  const services = getTranslatedServices(); 
  console.log(services);
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isTablet = useMediaQuery("(max-width:1023px) and (min-width:600px)");
  const isMobile = useMediaQuery("(max-width:599px)");

  // Determine number of cards to show based on screen size
  let numCardsToShow = 1;
  if (isDesktop) {
    numCardsToShow = 3;
  } else if (isTablet) {
    numCardsToShow = 2;
  }

  // Group services into arrays of length numCardsToShow
  const groupedServices = [];
  for (let i = 0; i < services.length; i += numCardsToShow) {
    groupedServices.push(services.slice(i, i + numCardsToShow));
  }

  return (
    <ServiceTypesContainer>
      <Container>
        <HeroText style={{marginBottom:'40px'}}>{t('serviseTypesHeading')}</HeroText>
        <Carousel animation="slide" navButtonsAlwaysVisible={true}>
          {groupedServices.map((group, index) => (
            <Box key={index} display="flex" >
              {group.map((service, idx) => (
                <Card key={idx}>
                  <Box>
                    <MediumText>{service.heading}</MediumText>
                    <StandarText style={{ marginTop: "15px" }}>
                      {service.title}
                    </StandarText>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "15px",
                      alignItems:'end'
                    }}
                  >
                    <ButtonPrimary />
                    <Card.Image src={service.imgSrc} alt={service.heading} />
                  </Box>
                </Card>
              ))}
            </Box>
          ))}
        </Carousel>
      </Container>
    </ServiceTypesContainer>
  );
};

export default ServiceTypes;
