
import styled from 'styled-components';

export const MisOrdenesContainerStyled = styled.div`
  max-width: 1600px;
  min-height: calc(100vh - 500px);
  margin: 0 auto;
  padding: 2rem 0;

  @media screen and (min-width: 280px) and (max-width: 480px) {
    max-width: 480px;
    width:100%;
    
  }
 
`;

export const MisOrdenesTitleStyled = styled.h2`
  font-weight: 800;
  font-size: 2.5rem;
  text-align: center;

  @media screen and (min-width: 280px) and (max-width: 480px) {
    font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  }
`;

export const MisOrdenesPatternStyled = styled.img`
  width: 100%;
  position: fixed;
  z-index: -100000000;
  bottom: -80px;
`;

export const MisOrdenesBtnContainerStyled = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;