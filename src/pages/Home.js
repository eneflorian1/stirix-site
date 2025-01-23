import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import CategoryFilter from '../components/CategoryFilter';

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="home">
      <CategoryFilter />
      <NewsList articles={articles} />
    </div>
  );
}

export default Home;