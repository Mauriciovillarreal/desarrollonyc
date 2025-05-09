import './Home.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Cartelera } from '../Cartelera/Cartelera';
import { PreguntasFrecuentes } from '../PreguntasFrecuentes/PreguntasFrecuentes';

export const Home = () => {
  return (
    <Container className='main-content'>
      <div className='containerBaner'>
        <div className='bannerHome'>
          <h1>DESCUENTOS</h1>
          <h1>IMPERDIBLES</h1>
          <h1>A LA COSTA</h1>
          <h6>HASTA UN</h6>
          <h2>50%OFF</h2>
          <h6>EN BUTACAS Y EMPRESAS SELECCINADAS</h6>
        </div>

      </div>

      <Cartelera />

      <PreguntasFrecuentes />

      <div className='ToWhatsApp'>
        <Link to="http://wa.me/5491139505311" className='btn-wa'>
          <img src="./img/wap1.png" alt="WhatsApp" />
        </Link>
      </div>
    </Container>
  );
};