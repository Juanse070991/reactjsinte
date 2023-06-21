import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';


export const CheckoutDatosStyled = styled.div`
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 324px){
    flex-direction: column;
    & h2 {
      text-align: center;
      background-color: rgba(899,12,6,0.6) ;
      width: 100%;

    }
   
   
    width: 100%;
  }
  @media only screen and (max-width: 1750px) and (min-width: 624px) {
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-top: 1rem;
    
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color:rgba(250,250,250,0.9);
  @media only screen and (max-width: 324px) {
    flex-direction: column;
    justify-content: center;
    margin:2rem auto ;
    align-items: center;
    width: 100%;
    height:100%;
    background-color: rgba(899,12,6,0.6) ;
  }
 



`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (min-width: 324px) and (max-width: 678px) {  
    width: 400px;
    height:800px;
    justify-content: center;
    align-item:center;
    flex-direction: column;
    
  }
 
  
`;

