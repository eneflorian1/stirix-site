import React from 'react';
import { Link, useParams } from 'react-router-dom';

const categories = ['Technology', 'Business', 'Sports', 'Entertainment', 'Science'];

function CategoryFilter() {
  const { category } = useParams();

  return (
    <div className="category-filter">
      {categories.map(cat => (
        <Link
          key={cat}
          to={`/category/${cat.toLowerCase()}`}
          className={`category-link ${category === cat.toLowerCase() ? 'active' : ''}`}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}

export default CategoryFilter;