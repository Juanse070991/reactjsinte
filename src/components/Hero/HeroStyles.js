import styled from 'styled-components';

export const HeroContainerStyled = styled.div`
  display: flex;
 flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  h1 {
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 280px) and (max-width: 1250px) {
  display:none;
    }
    
`;

export const HeroFormStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  

  @media only screen and (max-width: 324px) {
   display:none;
  }
`;

export const HeroSearchBarStyled = styled.input`
  background-color: black;
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 2.3rem;
  color: white;
  @media only screen and (min-width: 280px) and (max-width: 624px) {
 display:none;
  }
 
`;

export const IconWrapperStyled = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 1.1rem;

  @media only screen and (min-width: 324px) {
    display:none;

`;

export const HeroBtnStyled = styled.input`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
 

  @media screen and (min-width: 280px) {
 margin: 40px auto;
  }
`;