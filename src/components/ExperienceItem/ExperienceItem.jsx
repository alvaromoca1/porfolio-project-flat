import React from 'react';

import './ExperienceItem.css';

const ExperienceItem = ({title,sumary,description,date}) => (
  <div className='mb-5'>
    <div className='flex mb-1 sm:flex-row flex-col'>
      <h4 className='experienceItem__title'>{title}</h4>
      <p className='experienceItem__date ml-0 sm:ml-2'> ({date})</p>
    </div>
    <p className='experienceItem__sumary mb-2'>({sumary})</p>
    <p className='experienceItem__description'>{description}</p>
  </div>
);

export default ExperienceItem;
