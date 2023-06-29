import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.div`
height: 100px;
width: 100%;
background-color:  rgb(0, 0, 0);
display: flex;
flex-direction:row;
justify-content: space-around;
align-items: center;
padding: 1rem 4rem;

@media (min-width: 320px) and (max-width: 417px){
  justify-content: space-around;
  height:80px;
  width:100%;
  padding:0px 0px;
  
  

}
@media (min-width: 417px) and (max-width: 768px){
  justify-content: space-around;
  padding: 0px 0px;
  width:100%;

}

@media (min-width: 768px) and (max-width: 1024px){
  justify-content: space-around;
  width:100%;
  margin: 0 auto;
  padding:0px 0px;
}
@media (min-width: 1024px) and (max-width: 1200px){
  justify-content: space-around;
  width:100%;
  margin: 0 auto;
  padding:0px 0px;
}
@media (min-width: 1200px) and (max-width: 1600px){
  margin: 0 auto;
  padding:0px 0px;
  justify-content: space-around;
  width:100%;

}

`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);d
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
margin:none;

@media (min-width: 320px) and (max-width: 417px){
  margin:0px 0px;
  justify-content: left;
  align-item:center;
 
 }

 @media (min-width: 417px) and (max-width: 768px){
  margin:0px 0px;
  justify-content: space-left;
  aling-item: center;
}

@media (min-width: 768px) and (max-width: 1024px){
 width: 100%;
 margin:0px 0px;

}
@media (min-width: 1024px) and (max-width: 1200px){
  width: 100%;
  height: 100%;
  display: flex; 
  flex-directon: row;
  align-items:center;
  justify-content: space-between;
  margin:none;
 
 }

@media (min-width: 1200px) and (max-width: 1600px){
  width: 100%;
  justify-content: space-between;
  max-width:1600px;
 padding: 0px 20px;
  margin:0px 0px;
 
 }


`;
 
export const LogoContainer = styled.div`
margin-left: 0.5rem;
display: flex;
align-itmes: center;
font-size: 1.2rem;

@media (min-width: 320px) and (max-width: 417px){
  img{
   width:85px;
   heigth:85px;
  }


  @media (min-width: 417px) and (max-width: 768px){
       img{
        width:85px;
         heigth:85px;
      }

  }

@media (min-width: 768px) and (max-width: 1024px){
  img{
    width:90px;
     heigth:90px;
  }
 }

 @media (min-width: 1024px) and (max-width: 1200px){
  img{
    width:90px;
     heigth:90px;
  }
 }
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

@media (min-width: 320px) and (max-width: 417px){

}

@media (min-width: 417px) and (max-width: 768px){

}

@media (min-width: 768px) and (max-width: 1024px){
  
}
@media (min-width: 1024px) and (max-width: 1200px){
  color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 40px;  
 a {
  padding: 1rem 1.5rem;
 }
 a:first-child {
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
 }

}
`;

export const Menu = styled.ul`
heigth: 100%;
width: 650px;
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;


@media (min-width: 320px) and (max-width: 417px) {
  background:black;
  position: absolute;
  top: 62px;
  left: ${({ open }) => (open ? "0" : "-130%" )};
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  transition: 0.5s all easy;
  
}

@media (min-width: 417px) and (max-width: 768px){
  background:black;
  position: absolute;
  top: 70px;
  left: ${({ open }) => (open ? "0" : "-130%" )};
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  transition: 0.5s all easy;
}


@media (min-width: 768px) and (max-width: 1024px) {
  background:black;
  position: absolute;
  top: 70px;
  left: ${({ open }) => (open ? "0" : "-130%" )};
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  transition: 0.5s all easy;
}


@media (min-width: 1024px) and (max-width: 1200px) {
  heigth: 100%;
  width: 650px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
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

@media (min-width: 320px) and (max-width: 417px) {
height:100%;
width:100%;
justify-content:center;
aling-item: center;

}
@media (min-width: 417px) and (max-width: 768px) {
  height:100px;
  width:100%;
  justify-content:center;
  aling-item: center;
  
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    
    
    }

  

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

@media (min-width: 320px) and (max-width: 417px) {
 flex-direction: column;
 justify-content: center;
 width:100%;


}

@media (min-width: 417px) and (max-width: 768px){
  flex-direction: column;
  justify-content: center;
  width:100%;

}

@media (min-width: 768px) and (max-width: 1024px) {
  flex-direction: column;
  justify-content: center;
  width:100%;
} 

@media (min-width: 1024px) and (max-width: 1200px) {
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
} 

  `;

/* fondo de icono de menu bars y x */
export const MobileIcon = styled.div`
  display: none;

  @media (min-width: 1025px) and (max-width: 1200px) {
  display: none;
    
  }

  @media (min-width: 768px) and (max-width:1024px) {
    font-size: 2rem;
    display: flex;
    width:100%;
    margin:auto 10px;
    justify-content: right;
    
  }
  
  @media (min-width: 417px) and (max-width: 768px){
    font-size: 2rem;
    display: flex;
    width:100%;
    margin:auto 10px;
    justify-content: right;
  }

  

  @media screen and (min-width: 320px) and (max-width: 417px) {
    font-size: 2rem;
    display: flex;
    width:100%;
    margin:auto 10px;
    justify-content: right;
    
    
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
  justify-content:center;
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
  @media screen and (min-width:320px) and (max-width: 417px) {
    display-flex;
    flex-direction:column;
    align-item: center;
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
  

  @media screen and (min-width: 320px) and (max-width 417px) {
  
   }
`;