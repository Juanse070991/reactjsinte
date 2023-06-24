
import styled from 'styled-components';

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 100px);
  background: rgba(0,1,1, 0.6);
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height:100%;
    padding: 10px 0px;
  }
`;

export const TitleStyled = styled.h1`
background: linear-gradient(83deg, rgba(250,250,250,0.9), rgb(209, 21, 6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size:1.3rem;
  }
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;
  & p {
    margin-bottom: 50px;
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const PatternStyled = styled.img`
  width: 100%;
  position: fixed;
  z-index: -100000000;
  bottom: -80px;
  
  @media screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 4rem;
  }
`;