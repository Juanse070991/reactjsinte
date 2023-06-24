import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: rgb(188, 21, 1);
  border: 3px solid rgb(888, 11, 1);
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 450px;
  top: 100px;
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;
  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      opacity: 90%;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1240px){
    width: 130px;
  }
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: 90%;
    color: black;
    font-weight: 600;
  }
  @media screen and (min-width: 320px) and (max-width: 1240px){
    font-size: 1.1rem;
    font-weight: 400px;
  }

`;

export const UsernameStyled = styled.h2`
  font-weight: 600;
  color: black;
  @media screen and (min-width: 320px) and (max-width: 1240px){
    font-size: 1.1rem;
    font-weight: 400px;
  }
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;