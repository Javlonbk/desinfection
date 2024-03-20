import styled from 'styled-components'
import personImage from '../../assets/png/person.png'

export const ContactContainer = styled.div`
padding: 30px;
margin: 30px auto;
background: radial-gradient(58.39% 328.01% at 51.32% 69.21%, #3DA0FC 0%, rgba(2, 227, 214, 0.2) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
border-radius: 10px;
position: relative;
`

ContactContainer.Form = styled.div`
width: 350px;
height: 300px;
background-color: #fff;
border-radius: 10px;
padding: 25px 15px;
box-sizing: border-box;
.btn-send{
    width: 100%;
    height: 40px;
    color: #fff;
    border-radius: 10px;
    margin-top: 50px;
}
`
ContactContainer.Form.Input = styled.input`
width: 100%;
height: 40px;
outline: none;
border: none;
background-color: #F2F2F2;
padding: 10px 15px;
box-sizing: border-box;
border-radius: 10px;
margin-top: 15px;
`

ContactContainer.Image = styled.img.attrs({
    src:personImage,
})`
width:350px;
position:absolute;
bottom:0px;
right:50px;
`