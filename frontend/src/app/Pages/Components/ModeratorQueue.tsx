"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/searchtable.module.css';

interface Article {
  _id: string;
  title: string;
  authors: string[];
  journalName: string;
  yearOfPublication: number;
  volume: number;
  number: number;
  pages: string;
  doi: string;
  accepted: boolean;
}

const AllArticles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const handleAccept = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8082/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accepted: true }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to accept article: ${response.statusText}`);
      }
  
      const updatedArticle = await response.json();
  
      // Update the article in the state
      setArticles((prevArticles) =>
        prevArticles.map((article) =>
          article._id === id ? { ...article, ...updatedArticle } : article
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8082/articles/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete article: ${response.statusText}`);
      }
  
      // Remove the article from the state
      setArticles((prevArticles) => prevArticles.filter((article) => article._id !== id));
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:8082/articles');
        const allArticles = await response.json();
        const unacceptedArticles = allArticles.filter((article: Article) => !article.accepted);
        setArticles(unacceptedArticles);
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
              <th>ID</th>
              <th>Title</th>
              <th>Author(s)</th>
              <th>Journal Name</th>
              <th>Year of Publication</th>
              <th>Volume</th>
              <th>Number</th>
              <th>Pages</th>
              <th>DOI</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article._id}>
                <td>{article._id}</td>
                <td>{article.title}</td>
                <td>{article.authors.join(', ')}</td>
                <td>{article.journalName}</td>
                <td>{article.yearOfPublication}</td>
                <td>{article.volume}</td>
                <td>{article.number}</td>
                <td>{article.pages}</td>
                <td>{article.doi}</td>
                <td><button onClick={() => handleAccept(article._id)}>Accept</button></td>
                <td><button onClick={() => handleReject(article._id)}>Reject</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllArticles;