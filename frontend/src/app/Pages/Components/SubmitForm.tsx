"use client";
import React, { useState } from 'react';

const SubmitForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    journalName: '',
    year: '',
    volume: '',
    number: '',
    pages: '',
    doi: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit prop with form data
    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Authors:</label>
          <input type="text" name="authors" value={formData.authors} onChange={handleChange} />
        </div>
        <div>
          <label>Journal Name:</label>
          <input type="text" name="journalName" value={formData.journalName} onChange={handleChange} />
        </div>
        <div>
          <label>Year of Publication:</label>
          <input type="text" name="year" value={formData.year} onChange={handleChange} />
        </div>
        <div>
          <label>Volume:</label>
          <input type="text" name="volume" value={formData.volume} onChange={handleChange} />
        </div>
        <div>
          <label>Number:</label>
          <input type="text" name="number" value={formData.number} onChange={handleChange} />
        </div>
        <div>
          <label>Pages:</label>
          <input type="text" name="pages" value={formData.pages} onChange={handleChange} />
        </div>
        <div>
          <label>DOI:</label>
          <input type="text" name="doi" value={formData.doi} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitForm;
