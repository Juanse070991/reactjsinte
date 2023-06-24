import styled from 'styled-components';


export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 5rem;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: none;
    flex-direction:column;
    align-items: none;
    max-width: 480px;
    width: 100%;
    height:100%;
    padding: 2rem 0;
  }
  
`;

