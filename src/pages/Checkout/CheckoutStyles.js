import styled from 'styled-components';


export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 5rem;
  @media screen and (min-width: 280px) and (max-width: 480px) {
    justify-content: none;
    flex-direction:column;
    align-items: none;
    max-width: 480px;
    width: 100%;
    height:100%;
    padding: 2rem 0;
  }
  @media screen and (min-width: 481px) and (max-width: 767px) {
    justify-content: none;
    flex-direction:column;
    align-items: none;
    max-width: 767px;
    width: 90%;
    margin: 0px auto;
    height:100%;
    padding: 2rem 0.5rem;
  }
  
`;

