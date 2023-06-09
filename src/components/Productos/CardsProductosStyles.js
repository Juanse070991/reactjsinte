import styled from 'styled-components';

export const ProductosContainer = styled.div`
display: grid;
place-items: center;
justify-content: center;
grid-template-columns: repeat(auto-fit, 400px);
row-gap: 3.5rem;
width: 100%;
padding: 1rem 0;

`;

export const ProductosCard = styled.div`
  background: rgb(0, 0, 0);
  width: 300px;
  border-radius: 15px;
  padding: 1rem;
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 600;
    margin: 0;
  }
  p {
    color: gray;
    font-size: 1.2rem;
  }
  @media (min-width: 320px) and (max-width: 417px){
   width:180px;
   height:280px;
   margin-right: 1rem;
   img{
    width:100%;
    height:120px;
   }
   h2{
       
   }
   p{
    font-size:0.8rem;
   }
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 320px) and (max-width: 417px){
    flex-direction: column;
    height:80px;
    justify-content: space-around;
    align-item: center;
    padding: 10px auto;
  
    
  }
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.4rem;
  background: linear-gradient(83deg, rgba(250,250,250,0.9), rgb(209, 21, 6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 320px) and (max-width: 417px){
  font-size: 1rem;
 
  }
 
`;