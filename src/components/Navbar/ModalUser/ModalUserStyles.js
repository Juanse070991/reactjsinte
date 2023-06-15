import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: rgb(209, 21, 6);
  border: 3px solid white;
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

  @media screen and (max-width: 480px){
    width: 150px;
    top: 50px;

    }
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: 90%;
    color: black;
    font-weight: 600;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 600;
  color: black;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;