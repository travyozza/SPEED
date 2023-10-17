"use client"
import React, { useState } from 'react';
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

type SortDirection = 'asc' | 'desc';

interface SortState {
  column: keyof Article;
  direction: SortDirection;
}

const SearchArticles: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [sortState, setSortState] = useState<SortState>({
    column: 'title',
    direction: 'asc',
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (column: keyof Article) => {
    const direction = sortState.column === column && sortState.direction === 'asc' ? 'desc' : 'asc';
    setSortState({ column, direction });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let endpoint = 'http://localhost:8082/articles';
      if (searchTerm) {
        endpoint += `title=${encodeURIComponent(searchTerm)}&`;
        endpoint += `authors=${encodeURIComponent(searchTerm)}&`;
        endpoint += `journalName=${encodeURIComponent(searchTerm)}`;
      }
      const response = await fetch(endpoint);
      const articles = await response.json();
      setSearchResults(articles);
      console.log(searchResults);
    } catch (error) {
      console.error(error);
    }
  };

  const sortedResults = [...searchResults].sort((a, b) => {
    const column = sortState.column;
    const direction = sortState.direction === 'asc' ? 1 : -1;
    if (a[column] < b[column]) {
      return -1 * direction;
    }
    if (a[column] > b[column]) {
      return 1 * direction;
    }
    return 0;
  });

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearch} className={styles.searchInput} />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      {searchResults.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th onClick={() => handleSort('title')}>Title</th>
              <th onClick={() => handleSort('authors')}>Author(s)</th>
              <th onClick={() => handleSort('journalName')}>Journal Name</th>
              <th onClick={() => handleSort('yearOfPublication')}>Year of Publication</th>
              <th onClick={() => handleSort('volume')}>Volume</th>
              <th onClick={() => handleSort('number')}>Number</th>
              <th onClick={() => handleSort('pages')}>Pages</th>
              <th onClick={() => handleSort('doi')}>DOI</th>
            </tr>
          </thead>
          <tbody>
            {sortedResults.map((article) => (
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

export default SearchArticles;