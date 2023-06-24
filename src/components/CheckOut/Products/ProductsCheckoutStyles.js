import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 40%;
  border:3px solid white;
  background:black;
  border-radius:25px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    max-width: 320px;
    flex-direction:column;
    width: 95%;
    height:100%;
    margin-top:50px;
    padding:3px 3px;
    
  }
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    max-width: 767px;
    flex-direction:row;
    width: 95%;
    height:100%;
    margin-top:50px;
    padding:3px 3px;
    
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 1024px;
    flex-direction:row;
    width: 95%;
    height:100%;
    margin-top:80px;
    padding:3px 3px;
    
  }

`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 800;
  font-size: 25px;
  color:white;
  margin-left:10px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin : 25px 80px;
    
  }

  @media only screen and (min-width: 481px) and (max-width: 767px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin : 25px 80px;
    
  }
    `;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 80%;
  height: 400px;
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

  @media screen and (min-width: 320px) and (max-width: 480px) {
   heigth: 100%;
   gap:0px;
   margin:0px auto;
   & p{
    margin-left: 4rem;
   }
  }
 
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    justify-content: center;
    & {
      padding:2px 1.5rem;
     }
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

  @media only screen and (min-width: 320px) and (max-width: 480px) {
   
  }
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