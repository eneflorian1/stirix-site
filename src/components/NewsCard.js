import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

function NewsCard({ article }) {
  return (
    <div className="article-card">
      <LazyLoad height={200} offset={100}>
        <img src={article.image} alt={article.title} />
      </LazyLoad>
      <div className="article-content">
        <h2>{article.title}</h2>
        <p>{article.excerpt}</p>
        <Link to={`/article/${article.id}`}>Read more</Link>
      </div>
    </div>
  );
}

export default NewsCard;