import React from "react";
import { useTranslation } from 'react-i18next';
import { GuaranteContainer } from "./style";
import { Container, Box } from "@mui/material";
import { HeroText } from "../Text/Text";
import ButtonPrimary from "../Button/Button";

const Guarante = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <GuaranteContainer>
        <GuaranteContainer.Image />
        <Box sx={{marginLeft:'100px'}}>
            <GuaranteContainer.Icon/>
            <HeroText style={{color:'#fff', margin:'30px auto'}}>
              {t('guarante.text')}
            </HeroText>
            <ButtonPrimary>{t('guarante.buttonText')}</ButtonPrimary>
        </Box>
      </GuaranteContainer>
    </Container>
  );
};

export default Guarante;
