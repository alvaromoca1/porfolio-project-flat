import React from 'react';

import './Header.css';

const Header = () => {
  return(
    <div className='flex justify-center'>
      <div className='app__header w-full md:w-2/4 py-10 sm:px-5 px-10'>
        <h1 className='app__header-title'>Im Alvaro Morales Caballero</h1>
        <p className='app__header-description'>With a little more 5 experience as a backend developer using laravel, Node.js, Typescript, Nest.js, Express and React. I am a person who likes challenges and is passionate about learning new things.</p>
      </div>
    </div>
  );
}

export default Header;
