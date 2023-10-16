"use client";
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Search term: ${searchTerm}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleSearch} />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
