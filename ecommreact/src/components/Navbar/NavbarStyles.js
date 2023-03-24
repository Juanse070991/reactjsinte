import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.div`
  height: 100px;
  width: 95%;
  background-color:  rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

  @media (min-width: 769px) and (max-width: 1024px){
    max-width: 1024px;
    width:100%;
   justify-content: center;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      max-width: 768px;
      width: 100%;
      height: 100px;
      flex-direction: column;
      align-items: ;
    }

`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex; 
flex-directon: row;
align-items:center;
justify-content: space-between;
margin: auto;

`;
 
export const LogoContainer = styled.div`
margin-left: 0.5rem;
display: flex;
align-itmes: center;
font-size: 1.2rem;

`;


export const LinksContainerStyled = styled.div`

color: white;
  
display: flex;
justify-content: center;
align-items: center;
gap: 40px;  
a {
  padding: 1rem 1.5rem;
}
a:first-child {
  background: var(--azul1);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

`;

export const Menu = styled.ul`
heigth: 100%;
width: 650px;
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;


@media screen and (max-width: 960px) {
  background: black;
  position: absolute;
  top: 70px;
  left: ${({ open }) => (open ? "0" : "-100%" )};
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  transition: 0.5s all easy;
}
`;

export const MenuItem = styled.li`
heigth: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
@media screen and (max-width: 960px){
  height: 70px;
  display: flex;
  justify-content: center;
  aling-items: center;
}

@media screen and (max-width: 960px) {
  width: 100%;
}



`;

export const MenuItemLink = styled.a`
display: flex;
justify-content: space-around;
align-items: center;
height: 100%;
padding: 0.5rem 2.5rem;
cursos: pointer;
transition: 0.5s all ease;
&: hover {
  color: green;
  background-color: rgba(259,21,0, 0.4);
  transition: 0.5s all ease;
}
  `;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 2rem;
    color:red;
  }
`;


export const LinkContainerStyled = styled.div`
  font-size: 1.5rem;
  color: ${props => (props.home ? 'rgb(209, 21, 6)' : 'rgb(209, 21, 6)')};
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;
  span {
    position: absolute;
    top: 0;
    height: 20px;
    width: 20px;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid black;
    color: rgb(209, 21, 6);
    background-color: white;
    font-size: 0.9rem;
  }
`;

export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color:white;
    font-size: 1rem;
    margin-right: 20px;
  }
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

