import React from 'react';
import './Location.css';
import LocationImage from '../Pages/ubi.jpeg'; // Asegúrate de que la ruta sea correcta
import Footer from '../Components/Footer/Footer'; // Asegúrate de proporcionar la ruta correcta

const Location = () => {
  return (
    <div className="location-page">
      <div className="location-container">
        <div className="rectangle">
          <p>DIRECCIÓN: Av. Torreon Nuevo 519, Vicente Riva Palacio, 58116 Morelia, Mich.</p>
          <p>TELEFONO: +524432324326</p>
        </div>
        <a href="https://maps.app.goo.gl/QYwdxLXhUiPykJ8F6?g_st=iw" target="_blank" rel="noopener noreferrer">
          <img src={LocationImage} alt="Location" className="location-image"/>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Location;
