import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../redux/user/user-actions';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import { FaUserAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { BiMenu } from "react-icons/bi";

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
} from './NavbarStyles';



function Navbar() {
  const currentUser = useSelector(state => state.user.currentUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <NavbarContainerStyled>
      <ModalCart />
      <ModalUser />
      <div>
        <Link to='/'>
          <img
            src='https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_boomerang,w_100/v1678315084/BoomSonic_y71f6k.jpg'
            alt='Logo'
          />
        </Link>
      </div>
      <LinksContainerStyled>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link to='/'>
            <LinkContainerStyled home>
              <HiHome />
            </LinkContainerStyled>
            Home
          </Link>
        </motion.div>

        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>

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
      </LinksContainerStyled>
     
    </NavbarContainerStyled>
  );
}

export default Navbar;