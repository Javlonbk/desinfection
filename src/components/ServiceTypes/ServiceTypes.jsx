import React, { useState, useEffect } from "react";
import { useMediaQuery, Container, Box, IconButton } from "@mui/material";
import { HeroText, MediumText, StandarText } from "../Text/Text";
import ButtonPrimary from "../Button/Button";
import { ServiceTypesContainer, Card } from "./style";
import { getTranslatedServices } from "./services";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  .carousel-items {
    display: flex;
    transition: transform 0.5s ease;
    transform: translateX(${(props) => props.translateValue}%);
  }

  .carousel-item {
    flex: 0 0 auto;
    margin-right: 15px;
    transform-origin: center;
    transition: transform 0.5s ease;
  }
`;

const ServiceTypes = () => {
  const { t } = useTranslation();
  const services = getTranslatedServices();
  const isMobile = useMediaQuery("(max-width:599px)");
  const numCardsToShow = isMobile ? 1 : 3;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [services.length]);

  useEffect(() => {
    setTranslateValue(currentIndex * -(100 / numCardsToShow));
  }, [currentIndex, numCardsToShow]);

  const handlePrevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handleIconClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <ServiceTypesContainer>
      <Container>
        <HeroText style={{ marginBottom: "40px" }}>
          {t("serviseTypesHeading")}
        </HeroText>
        <CarouselWrapper translateValue={translateValue}>
          <div className="carousel-items">
            {services.map((service, idx) => (
              <div key={idx} className="carousel-item">
                <Card>
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
                      alignItems: "end",
                    }}
                  >
                    <ButtonPrimary style={{width:'50px'}} />
                    <Card.Image
                      src={service.imgSrc}
                      alt={service.heading}
                    />
                  </Box>
                </Card>
              </div>
            ))}
          </div>
        </CarouselWrapper>
        {isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <IconButton onClick={handlePrevCard}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton onClick={handleNextCard}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        )}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            {services.map((service, index) => (
              <IconButton
                key={index}
                onClick={() => handleIconClick(index)}
                color={currentIndex === index ? "primary" : "inherit"}
              >
                {index + 1}
              </IconButton>
            ))}
          </Box>
        )}
      </Container>
    </ServiceTypesContainer>
  );
};

export default ServiceTypes;
