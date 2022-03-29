import React from 'react';

import './ProjectItem.css';

const ProjectItem = ({title,description,link,img}) => {
  return(
    <div className='mb-5'>
      <a href={link} className='sm:flex  flex-column'>
        <div className='w-3/4'>
          <h3 className='app__article-title'>{title}</h3>
          <p className='app__article-sumary'>{description}</p>
        </div>
        <div className='sm:w-1/4 w-full ml-0 sm:ml-0'>
          <img src={img} alt="" />
        </div>
      </a>
    </div>
  )
}

export default ProjectItem;
