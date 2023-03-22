import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 40%;
  border:3px solid white;
  background:black;
  border-radius:25px;
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 800;
  font-size: 25px;
  color:white;
  margin-left:10px;
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 80%;
  height: 440px;
  margin: 0 auto;
  overflow: scroll;
  background:black;
  border-radius: 5px;
  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background:red;
    border-radius: 5px;
  }
  &::-webkit-scrollbar:horizontal {
    display: none;
  }
  @media (max-height: 800px) {
    height: 270px;
  }
  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color:rgb(0, 0, 153);
  font-size: 1rem;
  font-weight:600;
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:black;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)`
color:

`;

export const PriceTotalStyled = styled.span`
  font-weight: 800;
  font-size: 1.3rem;
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
  background:rgb(0, 0, 0) ;
`;