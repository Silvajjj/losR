import React from 'react';
import EspecialText from "../SpecialText/SpecialText";

const EntradaMenu = ({ text }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <EspecialText text={text} />
    </div>
  )
}

export default EntradaMenu;
