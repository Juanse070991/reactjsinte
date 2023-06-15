
import styled from 'styled-components';

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 100px);
  background: rgba(0,1,1, 0.6);
  width: 80%;
  margin: 0 auto;
`;

export const TitleStyled = styled.h1`
background: linear-gradient(83deg, rgba(250,250,250,0.9), rgb(209, 21, 6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;
  & p {
    margin-bottom: 50px;
  }
`;

export const PatternStyled = styled.img`
  width: 100%;
  position: fixed;
  z-index: -100000000;
  bottom: -80px;
`;