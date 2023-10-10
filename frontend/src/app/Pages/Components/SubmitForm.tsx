"use client";

import React, { useState } from 'react';

interface FormValues {
  title: string;
  authors: string;
  journalName: string;
  year: number;
  volume: number;
  number: number;
  pages: string;
  doi: string;
}

const initialFormValues: FormValues = {
  title: '',
  authors: '',
  journalName: '',
  year: 0,
  volume: 0,
  number: 0,
  pages: '',
  doi: '',
};

const SubmitForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues); // Replace with your submit logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formValues.title} onChange={handleChange} />
      </label>
      <label>
        Authors:
        <input type="text" name="authors" value={formValues.authors} onChange={handleChange} />
      </label>
      <label>
        Journal Name:
        <input type="text" name="journalName" value={formValues.journalName} onChange={handleChange} />
      </label>
      <label>
        Year:
        <input type="number" name="year" value={formValues.year} onChange={handleChange} />
      </label>
      <label>
        Volume:
        <input type="number" name="volume" value={formValues.volume} onChange={handleChange} />
      </label>
      <label>
        Number:
        <input type="number" name="number" value={formValues.number} onChange={handleChange} />
      </label>
      <label>
        Pages:
        <input type="text" name="pages" value={formValues.pages} onChange={handleChange} />
      </label>
      <label>
        DOI:
        <input type="text" name="doi" value={formValues.doi} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitForm;