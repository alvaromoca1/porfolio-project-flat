import React from 'react';
import { NavBar } from '../../components';
import {Project,Article,SocialMedia,Footer} from '../../containers';
import './Project.css';

const Projects = () => (
  <div>
    <NavBar/>
    <Project />
    <Article />
    <SocialMedia/>
    <Footer/>
  </div>
);

export default Projects;
