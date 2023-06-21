import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../redux/user/user-actions';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";

import { FaUserAlt,FaBars, FaTimes } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';


import ModalCart from './ModalCart/ModalCart';
import ModalUser from './ModalUser/ModalUser';
import CartIcon from './CartIcon/CartIcon';

import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
  UserImageStyled,
  MobileIcon,
  Wrapper,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
} from './NavbarStyles';



function Navbar() {
 
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const currentUser = useSelector(state => state.user.currentUser);


  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <NavbarContainerStyled>
      <Wrapper>
      <ModalCart />
      <ModalUser />
      
        <LogoContainer>
        <Link to='/'>
          <img
            src='https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_boomerang,w_100/v1678315084/BoomSonic_y71f6k.jpg'
            alt='Logo'
          />
        </Link>
        </LogoContainer>

        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

      <LinksContainerStyled>
      <Menu open={showMobileMenu}>
        <MenuItem>

          <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} to='/'>

        <motion.div whileTap={{ scale: 0.97 }}>

          <Link to='/'>

            <LinkContainerStyled home>

              <HiHome />

            </LinkContainerStyled>

            Home

          </Link>

        </motion.div>

        </MenuItemLink>

        </MenuItem>

       
        <MenuItem>

          <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} to='/'>

        <CartNavStyled>
           
          

          <CartIcon/>

          

        </CartNavStyled>

        </MenuItemLink>

        </MenuItem>

        
        <MenuItem>

          <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)} to='/'>

        <UserNavStyled>

          <UserContainerStyled
            onClick={() =>
              currentUser
                ? dispatch(userActions.toggleMenuHidden())
                : navigate('/register')
            }
          >


            <SpanStyled>
              {currentUser ? `${currentUser.displayName}` : 'Inicia Sesión'}
            </SpanStyled>


            {currentUser?.photoURL ? (
              <UserImageStyled src={currentUser.photoURL} alt='Perfil' />
            ) : (
              <FaUserAlt />
            )}
          </UserContainerStyled>

         </UserNavStyled>

        </MenuItemLink>

        </MenuItem>

        </Menu>

      </LinksContainerStyled>
      </Wrapper>
    </NavbarContainerStyled>
  );
}

export default Navbar;