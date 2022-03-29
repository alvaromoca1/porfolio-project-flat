import React from 'react';
import { data } from '../../constants';
import './Project.css';
import { ProjectItem } from '../../components';

const Project = () => {
  return(
    <div className='flex justify-center' id="project">
      <div className='w-full md:w-2/4 py-10 sm:px-5 px-10'>
        <h3 className='app__experience-title mb-10'>Projects</h3>
        {data.projects.map((item, index)=>(
            <ProjectItem key={index} title={item.title} description={item.description} link={item.link} img={item.img}/>
        ))}
      </div>
  </div>
  )
}

export default Project;
