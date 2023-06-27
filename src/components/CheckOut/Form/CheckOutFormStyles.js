import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';


export const CheckoutDatosStyled = styled.div`
 
  @media screen and (min-width: 320px) and (max-width: 417px){
    max-width: 417px;
    width:100%;
    & h2{
      font-size: 1.2rem;
      font-weitgh: 800;
      text-align: center;
    }
  }

    @media screen and (min-width: 481px) and (max-width: 767px){
      max-width: 767px;
      background-color:red;
    
  }
  @media screen and (min-width: 768px) and (max-width: 1200px){
    
  }
   
   
   
  
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  color:rgba(250,250,250,0.9);
 
  @media only screen and (min-width: 320px) and (max-width: 417px) {  
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    color:rgba(250,250,250,0.9);
    width: 200px;
    
  }


  @media only screen and (min-width: 768px) and (max-width: 1024px) {  
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    color:rgba(250,250,250,0.9);
    
  }

`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 320px) and (max-width: 417px) {  
    max-width:417px;
    width:100%;
    height:100%;
    justify-content: center;
    align-item:center;
    flex-direction: column;
    padding:2rem 2rem;
    
    
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {  
    width: 90%;
    height:100%;
    margin: 40px auto;
    justify-content: center;
    align-item:center;
    flex-direction: row;
  }
 
  
`;

