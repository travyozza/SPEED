"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/searchtable.module.css';
import axios from 'axios';

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
}

const AllArticles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [editArticle, setEditArticle] = useState<Article | null>(null);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:8082/articles');
      const articles = response.data;
      setArticles(articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);


  const handleEditField = async (field: string, value: string) => {
    if (editArticle) {
      try {
        const updatedArticle = { ...editArticle, [field]: value };
        const response = await axios.put(`http://localhost:8082/articles/${editArticle._id}`, updatedArticle);

        if (response.status === 200) {
          setEditArticle(null);
          fetchArticles();
        } else {
          console.error(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeleteArticle = async (id: string) => {
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article._id}>
                <td>
                  {editArticle === article ? (
                    <input
                      type="text"
                      value={article.title}
                      onChange={(e) => handleEditField('title', e.target.value)}
                    />
                  ) : (
                    article.title
                  )}
                </td>
                <td>{editArticle === article ? (
                  <input
                    type="text"
                    value={article.authors.join(', ')}
                    onChange={(e) => handleEditField('authors', e.target.value)}
                  />
                ) : (
                  article.authors.join(', ')
                )}</td>
                <td>
                  {editArticle === article ? (
                    <input
                      type="text"
                      value={article.journalName}
                      onChange={(e) => handleEditField('journalName', e.target.value)}
                    />
                  ) : (
                    article.journalName
                  )}
                </td>
                <td>{editArticle === article ? (
                  <input
                    type="number"
                    value={article.yearOfPublication}
                    onChange={(e) => handleEditField('yearOfPublication', e.target.value)}
                  />
                ) : (
                  article.yearOfPublication
                )}</td>
                <td>{editArticle === article ? (
                  <input
                    type="number"
                    value={article.volume}
                    onChange={(e) => handleEditField('volume', e.target.value)}
                  />
                ) : (
                  article.volume
                )}</td>
                <td>{editArticle === article ? (
                  <input
                    type="number"
                    value={article.number}
                    onChange={(e) => handleEditField('number', e.target.value)}
                  />
                ) : (
                  article.number
                )}</td>
                <td>
                  {editArticle === article ? (
                    <input
                      type="text"
                      value={article.pages}
                      onChange={(e) => handleEditField('pages', e.target.value)}
                    />
                  ) : (
                    article.pages
                  )}
                </td>
                <td>
                  {editArticle === article ? (
                    <input
                      type="text"
                      value={article.doi}
                      onChange={(e) => handleEditField('doi', e.target.value)}
                    />
                  ) : (
                    article.doi
                  )}
                </td>
                <td>
                  <button onClick={() => setEditArticle(article)}>Edit</button>
                  <button onClick={() => handleDeleteArticle(article._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllArticles;
