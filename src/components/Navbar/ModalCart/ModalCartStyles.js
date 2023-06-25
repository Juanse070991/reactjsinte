import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 450px;
  height: calc(100vh - 4rem);
  padding: 2rem;
  background-color: rgb(0, 0, 0);
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(259,21,0, 0.4);

  

  @media (min-width: 280px) and (max-width: 480px){
    width: 95%;
    height:100%;
    gap:0px;
    margin:0px auto;
    height: calc(100vh - 3.5rem);
    }

    @media only screen and (min-width: 768px) and (max-width: 1200px) {
      height: calc(100vh - 4rem);
     
      ;
   }
   @media only screen and (min-width: 1201px) and (max-width: 1650px) {
    height: calc(100vh - 26rem);
   
    ;
 }
`;

export const CloseButtonContainerStyled = styled.div`
  height: 32px;
  @media only screen and (min-width: 280px) and (max-width: 480px) {
   margin-left:1.7rem ;
  }
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
 background: linear-gradient(83deg, rgba(250,250,250,0.9), rgb(209, 21, 6));
  color: white;
  cursor: pointer;
  
  @media only screen and (min-width: 280px) and (max-width: 480px) {
    width: 1.3rem;
    height: 1.3rem;
    
    }
    @media only screen and (min-width: 1201px) and (max-width: 1650px) {
    
    }
  
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  & h1 {
    margin-top: 1px;
  }
  @media only screen and (min-width: 280px) and (max-width: 480px) {
  h1{
    font-size:1rem;
  }
  }
`;

export const MainContainerStyled = styled.div`
  height: 55%;
  @media only screen and (min-width: 280px) and (max-width: 480px) {
   width:95%;
   margin-left: 2rem;
   height: 40%;
    }

    @media only screen and (min-width: 1201px) and (max-width: 1650px) {
      height:100%;
     
      ;
   }
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;
  padding-left: 0;
  overflow: scroll;
  &::-webkit-scrollbar {
     background: linear-gradient(83deg, rgba(250,250,250,0.9), rgb(209, 21, 6));
  }
  &::-webkit-scrollbar:horizontal {
    display: none;
  }
  @media (max-height: 800px) {
    height: 235px;
  }

  @media only screen and (min-width: 280px) and (max-width: 480px) {
    gap:none;
       height:80px;
    }
    @media only screen and (min-width: 1201px) and (max-width: 1650px) {
      
      }

`;

export const ProductContainerStyled = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 360px;
  border:1.5px solid white;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 20px 5px rgba(259,21,0, 0.4);
  padding: 1rem;
  border-radius: 15px;
  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
  @media only screen and (min-width: 280px) and (max-width: 480px) {
    width: 80%;
    height:100%;
    gap:0;
    flex-direction:column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    & img {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  

`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 190px;
  @media only screen and (min-width: 280px) and (max-width: 480px) {
      width:100%:
    }

`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
  @media only screen and (max-width: 624px) and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    background-color: red;
    width: 100%; 
    border-radius:3px;

  }
  @media only screen and (min-width: 280px) and (max-width: 480px) {
    font-weight: 400;
      font-size: 0.5rem;
      background-color:transparent;
      
    }
`;

export const TextStyled = styled.p`
  margin: 0;
  color: #666;
  font-size: 1rem;
  @media only screen and (min-width: 280px) and (max-width: 480px) {
    display: none;
  }
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
  background: linear-gradient(83deg, rgba(250,250,250,0.9), rgb(209, 21, 6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (min-width: 280px) and (max-width: 480px) {
    margin-left: 2.5rem; 
    font-size:15px;
    font-weigth: 400;
  
  }
  
`;

export const PriceContainerStyled = styled.div`
  z-index: 1000;
  background-color:  rgba(0, 0, 0, 0.3);
  & p {
    text-align: center;
    margin-bottom: 0;
  }
  
  @media only screen and (min-width: 280px) and (max-width: 1240px) {
    p{
      margin-left: 2rem;
    }
  }
  @media only screen and (min-width: 1201px) and (max-width: 1650px) {
   
    }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
        
`;

export const EnvioStyled = styled(SubtotalStyled)`

@media only screen and (min-width: 280px) and (max-width: 480px) {
   font-size: 0.8rem;
   font-weigth: 400;

  }

`;

export const TotalStyled = styled(SubtotalStyled)`
@media only screen and (min-width: 280px) and (max-width: 480px) {
  font-size: 1rem;
  font-weigth: 400;

 }
`;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  display: flex;
  justify-content: center;
  align-item:center;
  width: 200px;

  @media only screen and (min-width: 280px) and (max-width: 480px) {
        margin-left: 5rem;
        height: 50px;
 }
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 280px) and (max-width: 480px) {
    font-size: 1rem;
    font-weigth: 400;
 
   }
   
`;