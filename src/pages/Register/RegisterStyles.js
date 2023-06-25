import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm } from 'formik';



export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media screen and (min-width: 280px) and (max-width: 481px){
   width:90%;
   max-width:481px;
   margin: 0px auto;
   
   
  }

  @media screen and (min-width: 481px) and (max-width: 767px){
   
  }
  
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
  
  @media screen and (min-width: 280px) and (max-width: 481px){
    display: flex;
    width:100%;
    max-width: 481px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0rem;
    gap: 20px;
 
  }

`;

export const LoginButtonGoogleStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  background: var(--gray-bg);
  color: white;
  cursor: pointer;

  @media screen and (min-width: 280px) and (max-width: 481px){
    
   }
`;

export const LoginEmailStyled = styled(Link)`
& p {
    color:red;
    ;
    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;
