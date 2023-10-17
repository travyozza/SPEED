"use client";
import React, { useState } from 'react';
import styles from '../styles/searchtable.module.css';

interface Article {
    id: number;
    title: string;
    author: string;
    journalName: string;
    yearOfPublication: number;
    volume: number;
    number: number;
    pages: string;
    doi: string;
}

const SearchArticles: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Article[]>([]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            let endpoint = 'http://localhost:8082/articles';
            if (searchTerm) {
                endpoint += `?search=${searchTerm}`;
            }
            const response = await fetch(endpoint);
            const articles = await response.json();
            setSearchResults(articles);
            console.log(searchResults);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchTerm} onChange={handleSearch} className={styles.searchInput} />
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>
            {searchResults.length > 0 && (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Journal Name</th>
                            <th>Year of Publication</th>
                            <th>Volume</th>
                            <th>Number</th>
                            <th>Pages</th>
                            <th>DOI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResults.map((article) => (
                            <tr key={article.doi}>
                                <td>{article.title}</td>
                                <td>{article.author}</td>
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