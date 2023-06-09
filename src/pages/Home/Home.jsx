import React from 'react';

import Categorias from '../../components/Categorias/Categorias';
import CardsProductos from '../../components/Productos/CardsProductos';
import CardsRecomendacion from '../../components/Recomendados/CardsRecomendacion';
import Hero from '../../components/Hero/Hero';

import {
  CategoriasWrapper,
  HomeWrapper,
  ProductosWrapper,
  RecomendadosWrapper,
} from './HomeStyles';
import { useRef } from 'react';

function Home() {
  const productsRef = useRef();

  const doScroll = () => {
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y
    );
  };

  return (
    <HomeWrapper>
      

      <Hero doScroll={doScroll} />

      
      <RecomendadosWrapper>
        <h2>Los mas pedidos!</h2>
        <CardsRecomendacion />
      </RecomendadosWrapper>

     
      <CategoriasWrapper>
        <h2>Busca por Categorias</h2>
        <Categorias />
      </CategoriasWrapper>

     
      <ProductosWrapper ref={productsRef}>
        <h2>Nuestros productos</h2>
        <CardsProductos />
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Home;