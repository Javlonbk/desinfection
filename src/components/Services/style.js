import { Paper } from '@mui/material'
import styled from 'styled-components'


export const ServicesContainer = styled.div`

`
export const Card = styled(Paper).attrs({
    elevation: 3
})`
border-radius: 30px !important;
display: flex;
align-items: center;
justify-content:space-between;
padding: 20px 40px;
box-sizing: border-box;
margin-top: 30px;
div{
    width: 70%;
}
`

Card.Image = styled.img.attrs({
width: '200px',
marginRight:'50px'
})``