import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 85%;
  background: var(--bg-gray);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;
  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
  @media screen and (min-width: 280px) and (max-width: 480px){
    flex-direction: column;
    width: 70%;
    margin-right:1rem;
    justify-content:center;
    border:3px solid white;
    background:black;
    border-radius:25px;
    margin-top: 10px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 10px;
      object-fit: cover;
    }
    }

  @media screen and (min-width: 481px) and (max-width: 767px){
    width:90%;
    flex-direction: row;
    justify-content:center;
    align-item:center;
    border:3px solid white;
    background:black;
    border-radius:25px;
    margin-top: 10px;
    & img{
      width:50px;
      height:50px;
    }
   
  }

  `;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 240px;

  @media screen and (min-width: 280px) and (max-width: 481px){
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100px;
    }
  
  @media screen and (min-width: 481px) and (max-width: 767px){
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 240px;
    }
`;

export const ProductTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;

  @media screen and (min-width: 280px) and (max-width: 481px){
    font-size: 0.8rem;
    font-weight: 300;
  }

  @media screen and (min-width: 481px) and (max-width: 767px){
    font-size: 0.8rem;
    font-weight: 300;
  }
 
    
`;

export const TextStyled = styled.h3`
  margin: 0;
  color: #666;
  font-size: 1rem;

  @media screen and (min-width: 280px) and (max-width: 481px){
    font-size: 0.8rem;
  }
  @media screen and (min-width: 481px) and (max-width: 767px){
    font-size: 0.8rem;
  }
`;

export const PriceStyled = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 2rem;
  background: var(--btn-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 280px) and (max-width: 481px){
    font-size:1rem;
   }

  @media screen and (min-width: 481px) and (max-width: 767px){
   font-size:1rem;
  }
`;

export const QuantityContainerStyled = styled.span`
  display: flex;
  align-items: center;

  @media screen and (min-width: 280px) and (max-width: 481px){
    width:25px;
    justify-content:center;
    heigth:25px;
  }
  @media screen and (min-width: 481px) and (max-width: 767px){
    width:25px;
    justify-content:right;
    heigth:25px;
  }
`;