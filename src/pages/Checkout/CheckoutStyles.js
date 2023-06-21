import styled from 'styled-components';


export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 5rem;
  @media screen and (min-width: 324px) and (max-width: 1024px) {
    justify-content: spacea-around;
    flex-direction:column;
    align-items: center;
    width: 80%;
    height:100%;
  }
  
`;

