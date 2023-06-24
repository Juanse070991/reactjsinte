import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};
  gap: 20px;
  padding: 1rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    height: 6px;
    width: 4px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(209, 21, 6);
    border-radius: 5px;
  }
  &::-webkit-scrollbar:vertical {
    display: none;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-weight: 800;
    font-size: 1rem;
    width:100%;
  }

  @media only screen and (min-width: 481px) and (max-width: 767px) {
    font-weight: 800;
    font-size: 1rem;
    width:100%;
    
  }

`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 103px;
  padding: 1rem 1.7rem;
  background: black;
  border-radius: 15px;
  border: 3px solid  rgba(250,250,250,0.9);

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    height: 300px;
    flex-direction:column;
    justify-content: space-around;
    width: 150px;
    margin:0 auto;
  }

  @media only screen and (min-width: 481px) and (max-width: 767px) {
    height: 300px;
    flex-direction:column;
    justify-content: space-around;
    width: 150px;
    margin:0 auto;
  }
`;

export const CardImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  object-fit: cover;
  
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width:150px;
  height: 100px;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 220px;

`;

export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
  letter-spacing: 0.05rem;
 
`;

export const InfoCard = styled.p`
  margin: 0;
  color: rgb(209, 21, 6);
  font-size: 1.2rem;
  
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-weight: 800;
    font-size: 1rem;
  }
  
  @media only screen and (min-width: 481px) and (max-width: 767px) {
    font-weight: 800;
    font-size: 1rem;

  }

`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  background: linear-gradient(83deg, rgba(250,250,250,0.9), rgb(209, 21, 6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-weight: 800;
    font-size: 1rem;
  }
`;