import styled from 'styled-components';
import GuaranteImage from '../../assets/png/guarante.png'; // Import the PNG image
import GuaranteIcon from '../../assets/svg/dicons.svg'; // Import the SVG icon

export const GuaranteContainer = styled.div`
background: radial-gradient(95.44% 490.36% at 92.87% 11.25%, #1c4c9f 0%, #33FFF3 100%);
    border-radius: 16px;
    padding: 30px;
    display: flex;
`;

GuaranteContainer.Image = styled.img.attrs({
    width: "400px",
    src: GuaranteImage 
})`
    
`;


GuaranteContainer.Icon = styled.img.attrs({
    src: GuaranteIcon,
    width: '60px',
    height:'60px'
    })`
   
`;
