import styled from 'styled-components';

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: 768px){
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
      font-size: 1.2rem;
    }
    img{
      width:300px;
      height: 150px;
      margin-top:20px;
    }
  }

`;

export const HeroFormStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`;

export const HeroSearchBarStyled = styled.input`
  background-color: black;
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 2.3rem;
  color: white;
`;

export const IconWrapperStyled = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 1.1rem;
  @media (max-width: 768px) {
    display:none;
  }
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
`;