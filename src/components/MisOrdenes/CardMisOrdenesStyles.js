import styled from 'styled-components';

export const MisOrdenesContainerStyled = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1500px;
  margin: 0 auto;
 
`;

export const PedidoContainerStyled = styled.div`
  background: rgb(0, 0, 0);
  border: 3px solid rgb(209, 21, 6);
  box-shadow:20px rgba(259,21,0, 0.4);
  width: 380px;
  border-radius: 15px;
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  

`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

export const IdStyled = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: rgb(0, 0, 153);
`;

export const PriceStyled = styled.p`
  font-weight: 800;
  font-size: 2rem;
  background: linear-gradient(83deg, rgba(250,250,250,0.9), rgb(209, 21, 6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;