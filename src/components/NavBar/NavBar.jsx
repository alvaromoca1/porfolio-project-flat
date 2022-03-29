import React,{ useState }  from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import './NavBar.css';
import {MdClose} from 'react-icons/md';

const NavBar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);

  return (
    <>
      <div className='app__navbar flex justify-center'>
        <ul className='w-full md:w-2/4 flex flex-nowrap justify-around my-10'>
          <li><a className='app_navbar__item' href="/">Developer Name</a></li>
          <li><a className='app_navbar__item' href="/project#project">Projects</a></li>
          <li><a className='app_navbar__item' href="/project#article">Articles</a></li>
          <li><a className='app_navbar__item' href="https://www.linkedin.com/in/alvaro-anderson-morales-caballero-dev/">Linkedin</a></li>
        </ul>
      </div>
      <div className='mx-10 my-5 app__navbar app__navbar-smallscreen'>
        <GiHamburgerMenu color="#000" fontSize={27} onClick={()=>{setToggleMenu(true)}}/>
        {toggleMenu &&(
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdClose fontSize={27} className='overlay__close' onClick={() =>{setToggleMenu(false)}}/>
            <ul className='app__navbar-smallscreen_links'>
              <li><a className='' href="/">Developer Name</a></li>
              <li><a className='' href="/project#project">Projects</a></li>
              <li><a className='' href="/project#article">Articles</a></li>
              <li><a className='' href="https://www.linkedin.com/in/alvaro-anderson-morales-caballero-dev/">Linkedin</a></li>
            </ul>
          </div>
          )}
      </div>
    </>
  )
};

export default NavBar;
