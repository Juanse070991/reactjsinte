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
margin: 20px auto;
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
  background:black;
  position: absolute;
  top: 70px;
  left: ${({ open }) => (open ? "0" : "-100%" )};
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  transition: 0.5s all easy;
}

`;

/*fondo del menu */
export const MenuItem = styled.li`
position: realative;
heigth: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 100%;
margin: 0 auto;
background-color: black;

`;
 /* contenedor del home y los links */
export const MenuItemLink = styled.a`
display: flex;
justify-content: space-around;
align-items: center;
height: 100%;
padding: 0.5rem 2.5rem;
cursos: pointer;
transition: 0.5s all ease;
&: hover {
  color: white;
  font-wide: 3rem;
  transition: 0.5s all ease;
}

@media only screen and (max-width: 324px) {
 flex-direction: column;
 justify-content: center;
 width:100%;
}
  `;

/* fondo de icono de menu bars y x */
export const MobileIcon = styled.div`
  display: none;

  @media only screen and (max-width: 1000px) and (min-width: 324px) {
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    cuarsor: pointer;
    font-size: 2rem;
    color:red;
    
  }
  
`;

      /* iconos*/
export const LinkContainerStyled = styled.div`
  font-size: 1.5rem;
  color: ${props => (props.home ? 'rgb(209, 21, 6)' : 'rgb(209, 21, 6)')};
  

 
`;

/* inicio de secion*/
export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
 widht:100%;
 

`;


/* numerito de compras*/
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
/* string de inicia sesion*/
export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color:red;
    font-size: 1rem;
    margin-right: 20px;
  }
  @media screen and (max-width:324px) and (min-width: 769px) {
   display: none;
   }
  
  
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;
 /* contenedor de inicia secion */ 
export const SpanStyled = styled.span`
  color: red;

  &:hover {
    text-decoration: underline;
  }
  

  @media screen and (min-width: 324px) and (max:width 768px) {
   display: none;
   }
`;

