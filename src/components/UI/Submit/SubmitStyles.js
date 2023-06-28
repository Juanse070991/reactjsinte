import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media screen and (min-width: 320px) and (max-width: 417px){
    padding: 0.5rem 1rem;
   }

   @media screen and (min-width: 417px) and (max-width: 768px){
    margin: 15px auto;
   }

   @media screen and (min-width: 768px) and (max-width: 1024px){
    margin: 15px auto;
   }
`;