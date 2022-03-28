import React from 'react';
import { NavBar } from '../../components';
import {Header,Experience,SocialMedia,Footer} from '../../containers';
import './Home.css';

const Home = () => (
  <div>
    <NavBar/>
    <Header />
    <Experience />
    <SocialMedia/>
    <Footer/>
  </div>
);

export default Home;
