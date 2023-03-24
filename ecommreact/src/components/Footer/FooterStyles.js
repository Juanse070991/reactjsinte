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

  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`;

export const LinksContainerStyled = styled.div`
  margin-bottom: 2rem ;
  
  `;

export const TarjetasCreditoStyled = styled.div`
   span{
    margin-right: 2rem ;
   }
   span:hover{
    transition: 2s;
    color: red;
   }
  
  `;

  export const ContactoStyled = styled.div`
  display: flex;
  flex-direction:column;

  @media screen and (max-width: 960px){
    flex-direction: row;
    gap: 15px;
  }
  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 15px;
  }


  `;









