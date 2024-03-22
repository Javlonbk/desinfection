import React, { useState } from "react";
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

  const [form, setForm] = useState({
    name:'',
    phone:''
  });

  const tgToken = "7091081477:AAEgwtR5RXVvLJaxwhT5ogVsmeni0b_Rs1Y";
  const chatId = "5511081391";

  const sendUserInfo = async () => {
    try {
      const { name, phone } = form;
      const message = `Name: ${name}%0APhone: ${phone}`; // Encode message text
      const url = `https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${chatId}&text=${message}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to send message to Telegram bot.');
      }

      console.log('Message sent successfully to Telegram bot.');
      resetForm();
    } catch (error) {
      console.error('Error occurred while sending message to Telegram bot:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    sendUserInfo();
  };

  const resetForm = () => {
    setForm({
      name: '',
      phone: ''
    });
  };

  return (
    <ThemeProvider theme={theme} >
      <Container>
        <ContactContainer id='contact'>
          <ContactContainer.Form 
          data-aos="flip-left"
          data-aos-duration="500"
          >
            <form onSubmit={handleSubmit}>
              <MediumText>{t('contact.formTitle')}</MediumText>
              <ContactContainer.Form.Input 
                onChange={(e) => setForm({...form, name:e.target.value})}
                value={form.name} 
                placeholder={t('contact.placeholderName')} 
                required 
              />
              <ContactContainer.Form.Input 
                onChange={(e) => setForm({...form, phone:e.target.value})}
                value={form.phone} 
                placeholder={t('contact.placeholderPhone')} 
                required 
              />
              <Button type="submit" variant="contained" color="primary" className="btn-send">
                {t('contact.submitButtonText')}
              </Button>
              <FormControl />
            </form>
          </ContactContainer.Form>
          <ContactContainer.Image
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="2000"
          data-aos-duration="3000"
          />
        </ContactContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
