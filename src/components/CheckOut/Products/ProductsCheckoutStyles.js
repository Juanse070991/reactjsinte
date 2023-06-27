import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 40%;
  border:3px solid white;
  background:black;
  border-radius:25px;

  @media screen and (min-width: 320px) and (max-width: 417px) {
    flex-direction:column;
    align-item:center;
    width: 90%;
    margin: 0 auto;
    height:100%;
 
    
  }
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    max-width: 767px;
    flex-direction:row;
    width: 100%;
    height:100vh;
    margin-top:30px;
    padding:3px 3px;
   
    
  }
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
    border:3px solid white;
    background:black;
    border-radius:25px;
    margin-top:65px;
    
  }
  @media only screen and (min-width: 1200px) and (max-width: 1600px) {
    width: 100%;
    border:3px solid white;
    background:black;
    border-radius:25px;
    margin-top:65px;
    
  }

`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 800;
  font-size: 25px;
  color:white;
  margin-left:10px;
  @media only screen and (min-width: 320px) and (max-width: 417px) {
    justify-content: center;
    align-items: center;
    text-align:center;
    width: 100%;
    
    
  }

  @media only screen and (min-width: 417px) and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 767px;
    text-align: center;
    
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    text-align: center;
  }

  @media only screen and (min-width: 1201px) and (max-width: 1650px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1650px;
    text-align: center;
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

  @media screen and (min-width: 320px) and (max-width: 417px) {
   heigth: 100%;
   width:90%;
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

  @media only screen and (min-width: 1201px) and (max-width: 1650px) {
    
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

  @media only screen and (min-width: 280px) and (max-width: 480px) {
   
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


`;

export const PriceTotalStyled = styled.span`
  font-weight: 800;
  font-size: 1.3rem;
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
  background:rgb(0, 0, 0) ;
`;