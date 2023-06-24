import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';


export const CheckoutDatosStyled = styled.div`
 
  @media screen and (min-width: 320px) and (max-width: 480px){
    max-width: 480px;
    disaplay:flex;
    flex-direction:column;
    justify-content:center;
    align-item: center;
    flex-wrap: wrap;
    & h2{
      font-size: 1rem;
      margin-right:8rem;
      text-align: center;
    }

    @media screen and (min-width: 481px) and (max-width: 767px){
      max-width: 767px;
      background-color:red;
    
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    max-width: 1024px;
    background-color: red;
    h2{
      font-size: 1.5rem;
      text-align: center;
      margin-right: 6rem;
    }
  }
   
   
   
  
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color:rgba(250,250,250,0.9);
 
 
  @media only screen and (min-width: 320px) and (max-width: 480px) {  
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    color:rgba(250,250,250,0.9);
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
  @media only screen and (min-width: 320px) and (max-width: 480px) {  
    max-width:480px;
    width: 400px;
    height:800px;
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

