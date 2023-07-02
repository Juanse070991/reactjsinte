import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
  display: flex;
  flex-direction: row ;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  
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
    justify-content:left;
    flex-wrap: wrap;
    gap: 20px
  }
  @media (min-width: 1024px) and (max-width: 1200px){
    max-width: 1200px;
    background-color: black;
    flex-direction:row;
    height:100%;
    width:100%;
    justify-content:center;
  }

  @media (min-width: 1200px) and (max-width: 1600px){
    max-width:1600px;
    background-color: black;
    flex-direction:column;
    height:100%;
    width:100%;
    justify-content:space-around;
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
  }
 
    @media (min-width: 417px) and (max-width: 768px){
      margin-left: 2.5rem;
      justify-content: left;
      width:100%;
    }

    @media (min-width: 768px) and (max-width: 1024px){
      justify-content:left;
      flex-direction:row;
      margin: 10px 10px;
      width:100%;
    }

    @media (min-width: 1024px) and (max-width: 1200px){
      justify-content:left;
      flex-direction:row;
      margin: 10px 10px;
      width:100%;
    }

    @media (min-width: 1200px) and (max-width: 1600px){
     justify-content:left;
     flex-direction:row;
      width:100%;
      margin:20px 10px;
      max-width:1600px;
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
    
  }

  @media (min-width: 417px) and (max-width: 768px){
    flex-direction:row;
    width:100%;
    align-item: center;
    justify-content:left;
  }

     @media (min-width: 768px) and (max-width: 1024px){
      flex-direction:row;
      width:100%;
      align-item: center;
      justify-content:left;
      margin: 20px 10px;
     }

       @media (min-width: 1024px) and (max-width: 1200px){
        flex-direction:row;
        width:100%;
        align-item: center;
        justify-content:left;
        margin: 20px 10px;
       }
  
  @media (min-width: 1200px) and (max-width: 1600px){
   display: flex;
   justify-content: left;
   margin:20px 20px;
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

  @media (min-width: 417px) and (max-width: 768px){
    width:100%;
    margin-left: 5rem;
    align-item:center;
    & img{
      font-size: 1.1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px){
    width:100%;
    padding: 0px 10px;
    align-item:center;
    & img{
      font-size: 1.1rem;
    }
  }
   
  @media (min-width: 1024px) and (max-width: 1200px){
    width:100%;
    padding: 0px 10px;
    align-item:center;
    & img{
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1200px) and (max-width: 1600px){
    width:100%;
    padding: 10px 10px;
    align-item:center;
    margin: 0px 20px;
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
      width: 80px;
      height:80px;
    }
  }

    @media (min-width: 417px) and (max-width: 768px){
      width:100%;
      justify-content: center;
      align-item:center;
      & img{
        width: 120px;
      height:90px;
      } 
      & p{
        font-size: 1.2rem;
        margin-rigth: 3rem;
        padding:0px 2rem;
      }
    }    

    @media (min-width: 768px) and (max-width: 1024px){
      width:100%;
      heigth: 100%;
      justify-content: center;
      align-item:center;
      & img{
       width:130px;
       heigth:110px;
      }
      & p{
        padding-right: 120px; 
      }
    }

    @media (min-width: 1024px) and (max-width: 1200px){
      width:100%;
      heigth: 100%;
      justify-content: center;
      align-item:center;
      & img{
       width:150px;
       heigth:120px;
      }
      & p{
        padding-right: 120px; 
      }
    }

    @media (min-width: 1200px) and (max-width: 1600px){
      width:100%;
      heigth: 100%;
      justify-content: center;
      align-item:center;
      & img{
       width:150px;
       heigth:120px;
      }
      & p{
        padding-right: 120px;
        margin-top: 110px;
        font-size:1.5rem;
        font-weight:600; 
      }
    }
  `;









