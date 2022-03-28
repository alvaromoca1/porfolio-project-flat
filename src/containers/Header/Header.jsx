import React from 'react';

import './Header.css';

const Header = () => {
  return(
    <div className='flex justify-center'>
      <div className='app__header w-full md:w-2/4 py-10 sm:px-5 px-10'>
        <h1 className='app__header-title'>Soy Alvaro Morales Caballero</h1>
        <p className='app__header-description'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
      </div>
    </div>
  );
}

export default Header;
