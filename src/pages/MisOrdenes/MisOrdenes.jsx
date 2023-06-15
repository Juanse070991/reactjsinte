import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ordersActions from "../../redux/orders/orders-actions";

import Button from '../../components/UI/Button/Button';
import CardsMisOrdenes from '../../components/MisOrdenes/CardsMisOrdenes';

import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesPatternStyled,
  MisOrdenesTitleStyled,
} from './MisOrdenesStyles';
import { useDispatch, useSelector } from 'react-redux';

const MisOrdenes = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.currentUser);
  const { orders, error } = useSelector(state => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders) {
      dispatch(ordersActions.getFullOrders(currentUser?.id));
    }

    if (!currentUser?.id) {
      dispatch(ordersActions.getOrdersFail());
    } else {
      error && dispatch(ordersActions.clearError());
    }
  }, [dispatch, currentUser?.id, orders, error]);

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Button onClick={() => navigate('/')}>Volver a comprar</Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
      <MisOrdenesPatternStyled
        src='https://res.cloudinary.com/ddfzor3mh/image/upload/v1678315083/2020_07_electric-guitar-wallpaper-2560x1080-fhd-1080p-desktop-backgrounds-for-pc-mac_ytdbyi.jpg'
        alt=''
      />
    </>
  );
};

export default MisOrdenes;