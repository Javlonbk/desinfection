import styled from 'styled-components'
import bgImg from '../../assets/png/advantage.png'

export const AdvantagesContainer = styled.div `
margin-top: 50px;
.icon{
    color: #1C4CF7;
    width: 90px;
    height: auto;
}
.advantage_box{

margin: 50px auto;
.advantage_box_content{
color:'#FAFAFA' !important;
 position: absolute;
 width: 35%;
 top: 50px;
 right: 100px;
}
}
`
export const BgImage = styled.img.attrs({
    src: bgImg,
    width: "100%",
    height:'400px',
    position: 'absolute'
})
``