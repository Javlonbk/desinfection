import React from "react";
import { Card, ServiceTypesContainer } from "./style";
import { Box, Container } from "@mui/material";
import { HeroText, MediumText, StandarText } from "../Text/Text";
import ButtonPrimary from "../Button/Button";
import {services} from './services'

const ServiceTypes = () => {
  

  return (
    <ServiceTypesContainer>
      <Container>
        <HeroText>Xizmat turlari</HeroText>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {services.map((service) => (
            <Card key={service.heading}>
              <div>
                <MediumText>{service.heading}</MediumText>
                <StandarText style={{marginTop:'15px'}}>{service.title}</StandarText>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems:'end'}}>
                <ButtonPrimary />
                <Card.Image src={service.imgSrc} />
              </div>
            </Card>
          ))}
        </Box>
      </Container>
    </ServiceTypesContainer>
  );
};

export default ServiceTypes;
