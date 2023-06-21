import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaGithubSquare, FaCcVisa, FaCcAmex, FaPhoneAlt, FaEnvelope, FaWhatsapp ,FaTwitter} from "react-icons/fa";

import { FooterContainerStyled, LinksContainerStyled , TarjetasCreditoStyled, ContactoStyled,LogoContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainerStyled>
      <ContactoStyled className = "contacto">
       <p><span><FaPhoneAlt/></span>  4464-6968 </p>
       <p><span><FaEnvelope/></span> boomsonic@hotmail.com </p>
       <p><span><FaWhatsapp/></span> +594 159985-3369</p>
      </ContactoStyled> 
      <LinksContainerStyled className='links'>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
           <span><FaGithubSquare fontSize="2rem" color='white'/></span>
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          <span><FaInstagramSquare fontSize="2rem" color='white'/></span>
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          <span><FaFacebook fontSize="2rem" color='white'/></span>
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          <span><FaTwitter fontSize="2rem" color='white'/></span>
        </Link>
      </LinksContainerStyled>
      <TarjetasCreditoStyled className="tarjetas">
         <span><FaCcVisa fontSize="2rem"/></span>
         <span><FaCcAmex fontSize="2rem"/></span>
         <span></span>
      </TarjetasCreditoStyled>
      <LogoContainer>
         <span><img src='https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_boomerang,w_80/v1678315084/BoomSonic_y71f6k.jpg'></img></span>
      </LogoContainer>  
      
         </FooterContainerStyled>
  );
};

export default Footer;