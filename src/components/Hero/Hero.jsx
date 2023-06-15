import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import * as categoriesActions from '../../redux/categories/categories-actions';

import Button from '../UI/Button/Button';

import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from './HeroStyles';

const Hero = ({ doScroll }) => {
  const [value, setValue] = useState('');

  const listOfCategories = useSelector(
    state => state.categories.categories
  ).map(category => category.category);
  
  const dispatch = useDispatch();

  const handlerSubmit = (e, value) => {
    e.preventDefault();

    const newCategory = value.trim().toLowerCase().split(' ').join('');

    const selectedCategory = listOfCategories.find(
      category => category.toLowerCase() === newCategory
    );

    if (selectedCategory) {
      dispatch(categoriesActions.selectCategory(selectedCategory));
      doScroll();
    } else {
      return alert('Categoria no encontrada');
    }
    setValue('');
  };

  return (
    <HeroContainerStyled>
      <div>
        <h1 className='title'>¿Qué equipo estás buscando?</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled
            value={value}
            onChange={e => setValue(e.target.value)}
            type='text'
            placeholder='Ej. Guitarras'
          />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button
            onClick={e => handlerSubmit(e, value)}
            radius='10'
            disabled={!value}
          >
            Buscar
          </Button>
        </HeroFormStyled>
      </div>
      <div className='foto-guitarras'>
        <img
          src='https://res.cloudinary.com/ddfzor3mh/image/upload/c_scale,e_boomerang,h_300,w_600/v1678315086/guitarras-dean_xrgtfy.jpg'
          alt=''
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;