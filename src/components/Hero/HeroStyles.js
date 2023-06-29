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
  @media only screen and (min-width: 320px) and (max-width: 417px) {
  display:none;
    }

    @media only screen and (min-width: 417px) and (max-width: 678px) {
          flex-direction: column;
          margin: 20px auto;
          h1{
            text-align: center;
            justify-content:a center;
            align-item:center;
            font-size: 1.3rem;
            font-wiegth: 600;
            
          }
        } 

        @media only screen and (min-width: 678px) and (max-width: 1024px) {
          display:none;
            }

            @media only screen and (min-width: 1024px) and (max-width: 1200px) {
              flex-direction: column;
              margin: 20px auto;
              h1{
                text-align: center;
                justify-content:a center;
                align-item:center;
                font-size: 1.3rem;
                font-wiegth: 600;
                
              }
            } 
    
`;

export const ContenedorGuitarraHero = styled.div` 
@media (min-width: 1200px) and (max-width: 1600px) {
  width:80%;
  margin:20px auto;
   img{
     width:100%;
     
   }
 } 

@media (min-width: 1024px) and (max-width: 1200px) {
 width:100%;
 margin:20px auto;
  img{
    width:100%;
  }
} 

@media (min-width: 768px) and (max-width: 1024px) {
  width:100%;
  margin:40px auto;
   img{
     width:100%;
   }
 } 



@media (min-width: 320px) and (max-width: 417px) {
  width:100%;
  margin:20px auto;
   img{
     width:100%;
     
   }
 } 


`;

export const HeroFormStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  
`;

export const HeroSearchBarStyled = styled.input`
  background-color: black;
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 2.3rem;
  color: white;

  @media (min-width: 320px) and (max-width: 417px) {
 display:none;
  }
  @media (min-width: 417px) and (max-width: 768px) {
      
     
     }
     @media (min-width: 768px) and (max-width: 1024px) {
      display:none;
        }

        @media (min-width: 1024px) and (max-width: 1200px) {
          background-color: black;
          outline: none;
          border: none;
          border-radius: 15px;
          padding: 0.5rem 2.3rem;
          color: white;
            }
 
`;

export const IconWrapperStyled = styled.div`
  display:none;

  @media (min-width: 417px) and (max-width: 678px) {
    display:none;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    display:none;
  }

    @media (min-width: 1200px) and (max-width: 1600px) {
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
 

  @media (min-width: 417px) and (max-width: 768px) {
       
  }
`;