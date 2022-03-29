import React from 'react';

import './ArticleItem.css';

const ArticleItem = ({date,title,sumary,link}) => (
  <div className='mb-5'>
    <a href={link}>
      <p className='app__article-date'>{date}</p>
      <h3 className='app__article-title'>{title}</h3>
      <p className='app__article-sumary'>{sumary}</p>
    </a>
  </div>
);

export default ArticleItem;
