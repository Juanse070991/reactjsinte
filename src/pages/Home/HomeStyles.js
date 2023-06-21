import styled from 'styled-components';

export const HomeWrapper = styled.div`

width: 90vw;
max-width: 1600px;
padding: 2rem;
margin: 0 auto;
h2 {
  font-weight: 400;
}

@media screen and (min-width: 324px) and (max-width: 768px) {
 display:flex;
 align-item:center;
 justify-content:center;
 flex-direction: column;   
}

`;

export const CategoriasWrapper = styled.section`
  display: flex;
  max-width: 100%;
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
    align-item:center;
    color: white;
  }
  @media only screen and (min-width: 324px) and (max-width: 769px) {
    width:100%;
    heigth: 100%;
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
   text-align:center;
   font-weight:800;
   background-color: rgb(198, 1, 0);;
  }
  }

  @media only screen and (max-width: 624px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
`;

export const RecomendadosWrapper = styled.section`
  width: 100%;
  h2 {
    font-weight: 400;
  }
  @media only screen and (min-width: 324px) and (max-width: 678px) {
   text-align: center;
   h2{
    font-weigth: 400;
    font-size: 1.5rem;
    margin-top: 40px;
    background-color: red;
    border-radius:5px solid white;
    border: 3px;
   }
  }
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
  margin-bottom: 2rem ;
`;