import React from 'react';
import EntradaMenu from '../Components/EntradaMenu/EntradaMenu'; 
import Hero1 from "../Components/EntradaMenu/postre.jpeg";
import Hero2 from "../Components/parrilla/pollos.jpeg"; // Asegúrate de que esta ruta es correcta
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className='entrada-menu-container'>
        <EntradaMenu text="Especialidades"/>
      </div>
      <div className='menu-image-container'>
        <img src={Hero1} alt="Hero" className='menu-image'/>
      </div>
      <div className='content-box'>
        <p className='menu-text'>
          <span className='text-light'>REVOLUCIONARIO</span><br/>
          <span className='text-normal'>(CHORIZO, BISTEC, CEBOLLA, TOCINO Y QUESO)</span><br/><br/>
          <span className='text-light'>REVOLUCIONARIO CON POLLO</span><br/>
          <span className='text-normal'>(POLLO, TOCINO, CEBOLLA, MORRÓN Y QUESO)</span><br/><br/>
          <span className='text-light'>PIONERO</span><br/>
          <span className='text-normal'>(BISTEC O PASTOR, TOCINO, MORRÓN Y QUESO)</span><br/><br/>
          <span className='text-light'>RIELERA</span><br/>
          <span className='text-normal'>(QUESO FUNDIDO CON ALGÚN INGREDIENTE)</span><br/><br/>
          <span className='text-light'>REVOLTOSO</span><br/>
          <span className='text-normal'>(CHAMPIÑONES, MORRÓN, POBLANO, CEBOLLA Y QUESO)</span><br/><br/>
          <span className='text-light'>ADELITA</span><br/>
          <span className='text-normal'>(PASTOR Y QUESO)</span><br/><br/>
          <span className='text-light'>SOLDADERA</span><br/>
          <span className='text-normal'>(PASTOR, PIÑA, POBLANO Y QUESO)</span><br/><br/>
          <span className='text-light'>CHARRASQUEADO</span><br/>
          <span className='text-normal'>(COMBINACIÓN AL GUSTO DEL MENU DE ESPECIALIDADES)</span>
        </p>
      </div>
      
      {/* Agrega el nuevo cuadro */}
      <div className='entrada-menu-container'>
        <EntradaMenu text="A la Parrilla"/>
      </div>
      <div className='menu-image-container'>
        <img src={Hero2} alt="Parrilla" className='menu-image'/>
      </div>
      <div className='content-box content-box-parrilla'>
        <p className='menu-text'>
          <span className='text-light'>NEW YORK</span><br/>
          <span className='text-normal'>(300 GR DEL CORTE, PAPAS, FRIJOLES, ENSALADA Y CEBOLLITAS)</span><br/><br/>
          <span className='text-light'>ARRACHERA</span><br/>
          <span className='text-normal'>(220 GR DEL CORTE, PAPAS, FRIJOLES, ENSALADA, CEBOLLITAS)</span><br/><br/>
          <span className='text-light'>COSTILLA DE RES</span><br/>
          <span className='text-normal'>(220 GR DEL CORTE, PAPAS, FRIJOLES, ENSALADA, CEBOLLITAS)</span><br/><br/>
          <span className='text-light'>BISTEC</span><br/>
          <span className='text-normal'>(220 GR DEL CORTE, PAPAS, FRIJOLES, ENSALADA, CEBOLLITAS)</span><br/><br/>
          <span className='text-light'>POLLO ADOBADO</span><br/>
          <span className='text-normal'>(INCLUYE FRIJOLES, ARROZ, ENSALADA, CEBOLLITAS Y PIÑA)</span><br/><br/>
          <span className='text-light'>TIRAS DE PECHUGA EMPANIZADAS</span><br/>
          <span className='text-normal'>(ARROZ, ENSALADA, PAPAS A LA FRANCESA)</span>
        </p>
      </div>
    </div>
  )
}

export default Menu;
