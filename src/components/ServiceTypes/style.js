import styled from 'styled-components'

export const ServiceTypesContainer = styled.div`
  margin: 60px auto;
`

export const Card = styled.div`
  width: 350px;
  height: 400px;
  margin-left:25px;
  background-color: #F3F6F6;
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width:576px) {
    width: 250px;
    height: 350px;
    p{
      font-size:12px;
      line-height: 16px;
    }
  }
`;

Card.Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  @media (max-width:576px) {
    width: 70px;
    height: 70px;
  }
`;
