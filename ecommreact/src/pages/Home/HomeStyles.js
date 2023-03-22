import styled from 'styled-components';

export const HomeWrapper = styled.div`

  width: 90vw;
  max-width: 1600px;
  padding: 2rem;
  margin: 0 auto;
  h2 {
   
    font-weight: 800;
    margin-left: 10px;
  }
`;

export const CategoriasWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  background-image: url("https://res.cloudinary.com/ddfzor3mh/image/upload/v1678315083/black-metal-texture-wallpaper-_-metal-texture-wallpaper_loo5sq.jpg");
  background-size:cover; 
  border-radius: 15px;
  border: 3px solid black;
  box-shadow: 1px 3px 1px 3px black;
  h2 {
    display: flex;
    justify-content: center;
    color: white;
  }
`;

export const ProductosWrapper = styled.section`
  display: flex; 
  flex-direction: column;
  padding-top: 3rem;
  background-image: url("https://res.cloudinary.com/ddfzor3mh/image/upload/v1678491370/patron-costuras-grunge-calaveras_225004-1117_teicol.avif");
  background-size: cover;
  border-radius: 15px;
  border: 3px solid black;
  box-shadow: 1px 3px 1px 3px black;
  margin-top: 5rem ;
  h2{
    display: flex;
    justify-content: center;
  }
  }
`;

export const RecomendadosWrapper = styled.section`
  width: 100%;
  h2 {
    font-weight: 400;
  }
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
`;