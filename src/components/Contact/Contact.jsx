import React from "react";
import { useTranslation } from 'react-i18next';
import { Button, FormControl, ThemeProvider, createTheme } from "@mui/material";
import { Container } from "@mui/system";
import { MediumText } from "../Text/Text";
import { ContactContainer } from "./style";

const Contact = () => {
  const { t } = useTranslation();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#242825', // Set your desired button color here
      },
    },
  });

  return (
    <ThemeProvider theme={theme} >
      <Container>
        <ContactContainer id='contact'>
          <ContactContainer.Form>
            <form action="#">
              <MediumText>{t('contact.formTitle')}</MediumText>
              <ContactContainer.Form.Input placeholder={t('contact.placeholderName')} />
              <ContactContainer.Form.Input placeholder={t('contact.placeholderPhone')} />
              <Button variant="contained" color="primary" className="btn-send" href="#send">
                {t('contact.submitButtonText')}
              </Button>
              <FormControl />
            </form>
          </ContactContainer.Form>
          <ContactContainer.Image/>
        </ContactContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
