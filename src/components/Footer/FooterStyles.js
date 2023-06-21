import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
  display: flex;
  flex-direction: row ;
  justify-content: space-around;
  align-items: center;
  padding: 7rem 0 2rem 0;
  
  img {
    border-radius: 5px;
  }

  @media screen and (min-width: 280px) and (max-width: 1240px){
    background-color: black;
    flex-direction:column;
    flex-wrap: wrap;
    
  }
`;

export const LinksContainerStyled = styled.div`
  margin-bottom: 2rem ;
  width:25%;
  
  
  
  `;

export const TarjetasCreditoStyled = styled.div`
width:25%;
span{
  margin: 10px 30px;
}
  
   @media screen and (min-width: 280px) and (max-width: 1240px){
    flex-direction:row;
    width:25%;
    align-item: center;
    justify-content:center;
    span{
      margin: 10px 30px;
      flex-direction:row;
    }
  }
  
  `;

  export const ContactoStyled = styled.div`
  display: flex;
  width:25%;
  flex-direction:column;
  flex-wrap: wrap;
  justify-content:center;
  & span{
     font-size: 1.5rem;
     font-weigth: 600; 
  }
  @media screen and (min-width: 320px) and (max-width: 1240px){
    gap: 15px;
    flex-direction:row;
    & img{
      font-size: 5rem;
    }
  }
 


  `;
  export const LogoContainer = styled.div ` 
  width:25%;
  & img,span{
    margin-top: 20px;

  }
  
  
  `;









