import styled from 'styled-components';
import home from '../../assets/png/home.png';

export const AboutContainer = styled.div`
  margin-top: 60px;
  .about-info{
    width: 30%;
    h1{
    font-size: 64px;
    line-height: 72px;
    color: #3375FF;
  }
  p{
    margin-top:30px;
    margin-bottom: 40px;
  }
}
`;

export const ImageContainer = styled.div`
  width: 500px;
  height: 450px;
`;

ImageContainer.HomePng = styled.img.attrs({
  src: home,
  width: "100%" // Enclosed width value in quotes
})``;
