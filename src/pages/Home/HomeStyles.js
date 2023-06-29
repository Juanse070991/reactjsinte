import styled from 'styled-components';

export const HomeWrapper = styled.div`

width: 90vw;
max-width: 1600px;
padding: 2rem;
margin: 0 auto;
h2 {
  font-weight: 400;
}

@media (min-width: 320px) and (max-width: 417px) {
  max-width:417px;
  width: 100%;
  padding: 0px;
 display:flex;
 align-item:center;
 justify-content:center;
 flex-direction: column;   
}
@media (min-width: 417px) and (max-width: 768px) {
  max-width:481px;
}

@media (min-width: 768px) and (max-width: 1024px){
  width:100%;
  max-width: 1024px;
  padding:0;

 
 }

`;

export const CategoriasWrapper = styled.section`
  display: flex;
  justify-content:center;
  align-item: center;
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
  @media (min-width: 320px) and (max-width: 417px) {
    width:100%;
    heigth: 100%;
    h2{
      font-size: 1.3rem;
      font-weigth: 600;
    }
  }

  @media (min-width: 417px) and (max-width: 768px) {
    width:100%;
    heigth: 100%;
    h2{
      font-size: 1.2rem;
      font-weigth: 800;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    heigth: 100%;
    width: 100%;
    h2{
      font-size: 1.2rem;
      font-weigth: 800;
    }
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

  @media (min-width: 768px) and (max-width: 1024px) {
    justify-content: center;
    background-size: 100%;
 border-radius: 10px;
 border: 1.5px solid black;
 h2 {
   font-size: 1rem;
   font-weight: 600;
 }
  }

  @media (min-width: 320px) and (max-width: 417px){
     justify-content: center;
     background-size: 100%;
  border-radius: 10px;
  border: 1.5px solid black;
  h2 {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const RecomendadosWrapper = styled.section`
  width: 100%;
  h2 {
    font-weight: 400;
  }
  
  @media (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    max-width: 1024px;
    h2{
     font-weigth: 400;
     font-size: 1.5rem;
     margin-top: 40px;
     border-radius:5px solid white;
     border: 3px;
    }
 
   }

  @media (min-width: 417px) and (max-width: 678px) {
   text-align: center;
   h2{
    font-weigth: 400;
    font-size: 1.5rem;
    margin-top: 40px;
    border-radius:5px solid white;
    border: 3px;
   }

  }

  @media (min-width: 320px) and (max-width: 417px){
    text-align: center;
    max-width:417px;
    h2{
     font-weigth: 400;
     font-size: 1rem;
     margin-top: 40px;
     border-radius:5px;
     border: solid white 2px; 
     width:100%;  
     background-color: red;  
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
  margin-bottom: 2rem ;
`;