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

  @media (min-width: 320px) and (max-width: 417px){
    background-color: black;
    flex-direction:column;
    gap: 3rem 1rem;
    justify-content:center;
    
  }
  @media (min-width: 417px) and (max-width: 768px){
    background-color: black;
    
    flex-direction:column;
    height:100%;
    width:100%;
    
    justify-content:center;
    
  }

  @media (min-width: 768px) and (max-width: 1024px){
    background-color: black;
    
    flex-direction:column;
    height:100%;
    width:100%;
    justify-content:center;
  }
  @media (min-width: 1024px) and (max-width: 1200px){
    background-color: black;
   
    flex-direction:column;
    height:100%;
    width:100%;
    justify-content:space-between;
  }
`;

export const LinksContainerStyled = styled.div`
  margin-bottom: 2rem ;
  display:flex;
  flex-direction: row;
  align-item:center;
  justify-content: center;
  width:25%;
  
  @media (min-width: 320px) and (max-width: 417px){
    margin-right: 2.7rem;
    width:100%;
    & a:hover{
      font-size: 2.5rem;
      color:red;
      transition: 1.2s;
    }
 
    @media (min-width: 417px) and (max-width: 768px){
      background-color: white;
      margin-right: 2rem;
      width:100%;
      max-width: 767px;

    }
    @media (min-width: 768px) and (max-width: 1024px){
      background-color: white;
      margin-right: 2rem;
      width:100%;
      max-width: 1024px;

    }
  
  `;

export const TarjetasCreditoStyled = styled.div`
width:25%;
display:flex;
flex-direction: row;
align-item:center;
justify-content: center;

span{
  margin: 10px 30px;
}
  
   @media (min-width: 320px) and (max-width: 417px){
    flex-direction:row;
    width:100%;
    align-item: center;
    justify-content:space-around;
    span{
      flex-direction:row;
     }
  }

  @media (min-width: 417px) and (max-width: 768px){
    flex-direction:row;
    width:100%;
    align-item: center;
    justify-content:space-around;
    span{
      flex-direction:row;
     }
  }
  
  `;

  export const ContactoStyled = styled.div`
  display: flex;
  width:25%;
  flex-direction:column;
  justify-content:center;
  & span{
    font-size: 1.5rem;
    font-weigth: 600;
    
    border-radius: 0 0 0 1rem;
    box-shadow: 0 0 50px 20px rgba(259,21,0, 0.4);
    letter-spacing: -1px;
  }
  & p{
    display:flex;
    width: 100%;
   
    height:100%;
  } 
  @media (min-width: 320px) and (max-width: 417px){
    width:100%;
    margin-left: 5rem;
    align-item:center;
    & img{
      font-size: 1.1rem;
    }
  }


  `;
  export const LogoContainer = styled.div ` 
  width:25%;
  display: flex;
  justify-content:center;
  align-item: center;
  & img,span{
    margin-top: 2px;

  }

  @media (min-width: 320px) and (max-width: 417px){
    gap: 15px;
    width:100%;
    margin-left:1.5rem;
    justify-content: center;
    align-item:center;
    & img{
      font-size: 1.1rem;
    }
    @media (min-width: 768px) and (max-width: 1024px){
      gap: 15px;
      width:100%;
      margin-left:1.5rem;
      justify-content: center;
      align-item:center;
      & img{
        font-size: 1.1rem;
        margin: 20px 80px;
      }
  
  `;









