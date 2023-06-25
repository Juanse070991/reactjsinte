import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 280px) and (max-width: 481px){
    max-width: 481px;
    width: 90%;
    margin: 0 auto;
  }
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1.5rem 2rem;
  color: white;
  background-color: var(--gray-bg);
  border-radius: 15px;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  outline: none;
  caret-color: white;
  ::placeholder {
    opacity: 80%;
  }
  -webkit-text-fill-color: white;
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--gray-bg) inset;
  }
  @media screen and (min-width: 280px) and (max-width: 481px){
    max-width: 481px;
    width: 150px;
    margin: 0 auto;
 
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;