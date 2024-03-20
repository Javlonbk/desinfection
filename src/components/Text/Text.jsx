import styled from "styled-components";

export const HeroText = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
  color: ${props => props.dark === "white" ? "#fafafa" : "#020c31"  };
`;

export const MediumText = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${props => props.dark === "white" ? "#fafafa" : "#020c31"  };
`;

export const StandarText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.dark === "white" ?   "#fafafa" : "#676d83"};
`;
