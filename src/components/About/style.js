import styled from 'styled-components';
import homeImage from '../../assets/png/homeBg.avif';

export const AboutContainer = styled.div`
  padding-top: 60px;
  background-image: linear-gradient(to bottom, rgba(35, 39, 86, 0.5), rgba(35, 39, 86, 0.9)), url(${homeImage});
  background-repeat: no-repeat;
  background-position: right 0px;
  background-attachment: fixed;
  background-size: cover;
  height: 80vh;
  .about-info {
    width: 50%;
    h1 {
      font-size: 64px;
      line-height: 72px;
      color: #fff; 
      margin-top: 100px;
      letter-spacing: 10px;
    }
    p {

      margin-top: 30px;
      margin-bottom: 40px;
      font-weight: 500;
      color: #fff; 
    }
  }
`;

export const ImageContainer = styled.div`
  width: 500px;
  height: 450px;
`;
