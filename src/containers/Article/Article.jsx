import React from 'react';
import { data } from '../../constants';
import { ArticleItem } from '../../components';
import './Article.css';

const Article = () => {
  return(
    <div className='flex justify-center' id="article">
      <div className='w-full md:w-2/4 py-10 sm:px-5 px-10'>
        <h3 className='app__experience-title mb-10'>Articles</h3>
        {data.Articles.map((item, index)=>(
            <ArticleItem key={index} date={item.date} title={item.title} sumary={item.sumary} link={item.link}/>
        ))}
      </div>
  </div>
  )
}

export default Article;
