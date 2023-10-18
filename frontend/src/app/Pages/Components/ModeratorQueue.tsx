"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/searchtable.module.css';

interface Article {
  id: number;
  title: string;
  authors: string[];
  journalName: string;
  yearOfPublication: number;
  volume: number;
  number: number;
  pages: string;
  doi: string;
}

const AllArticles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:8082/articles');
        const articles = await response.json();
        setArticles(articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className={styles.container}>
      {articles.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author(s)</th>
              <th>Journal Name</th>
              <th>Year of Publication</th>
              <th>Volume</th>
              <th>Number</th>
              <th>Pages</th>
              <th>DOI</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.doi}>
                <td>{article.title}</td>
                <td>{article.authors.join(', ')}</td>
                <td>{article.journalName}</td>
                <td>{article.yearOfPublication}</td>
                <td>{article.volume}</td>
                <td>{article.number}</td>
                <td>{article.pages}</td>
                <td>{article.doi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllArticles;