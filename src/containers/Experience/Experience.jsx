import React from 'react';
import {ExperienceItem} from '../../components'
import {data} from '../../constants'
import './Experience.css';

const Experience = () => {
  return(
    <div className='flex justify-center'>
      <div className='w-full md:w-2/4 py-10 sm:px-5 px-10'>
        <h3 className='app__experience-title mb-10'>Mi Experiencia</h3>
        {data.Experience.map((item, index)=>(
            <ExperienceItem key={index} title={item.title} sumary={item.sumary} description={item.description} date={item.date}/>
        ))}
      </div>
    </div>
  );
}

export default Experience;
