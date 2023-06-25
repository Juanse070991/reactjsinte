import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  background-color: white-smoke;
  height: 500px;
  width:100%;
  margin:0 auto;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  user-select: none;

  @media (min-width: 1200px) and (max-width: 1650px){
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    alig-items: center;
    height:100%;
  }

  @media (min-width: 768px) and (max-width: 1200px){
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    alig-items: center;
    height:100%;
  }
  @media (min-width: 280px) and (max-width: 480px){
    display:flex;
    width:100%;
    flex-direction:column;
    justify-content: center;
    alig-items: center;
    height:100%;
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    max-width:481px;
    display:flex;
    width:100%;
    flex-wrap: wrap;
    justify-content: center;
    alig-items: center;
    height:100%;
  }
  
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 250px;
  width:250px;
  gap: 0.1rem;
  padding: 2rem 0.5rem;
  background-color: ${({ selected }) =>
    selected ? 'rgba(209,21,0, 0.4)' : 'rgb(0, 0, 0)'};
  border-radius: 15px;
  border: 3px solid white;
  cursor: pointer;
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  h2:hover{
    color:rgba(259,21,0, 0.4);

    transition: 2s;
  }
  img {
    height:150px;
    width:100%;
  }
  }
  :first-child {
    img {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px){
    display:flex;
    flex-direction:column;
    justify-content: center;
    alig-items: center;
  }

  @media (min-width: 280px) and (max-width: 480px){
    height: 180px;
    width:160px;
  h2 {
    font-size: 1rem;
    font-weight: 600;
  }
  }

`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  border-radius: 15px;
`;