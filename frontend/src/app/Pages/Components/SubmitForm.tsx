"use client";
import React, { useState } from 'react';
import styles from '../styles/submitform.module.css'
import axios from 'axios';

interface FormValues {
  title: string;
  authors: string;
  journalName: string;
  yearOfPublication: number;
  volume: number;
  number: number;
  pages: string;
  doi: string;
}

const initialFormValues: FormValues = {
  title: '',
  authors: '',
  journalName: '',
  yearOfPublication: 0,
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { title, authors, journalName, yearOfPublication, volume, number, pages, doi } = formValues;
      if (!title || !authors || !journalName || !yearOfPublication || !volume || !number || !pages || !doi) {
        alert('Please fill out all fields.');
        return;
      }
      const response = await axios.post('http://localhost:8082/articles', formValues);
      console.log(response.data);
      setFormValues(initialFormValues); // Reset the form values to their initial state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Title:
        <input className={styles.inputField} type="text" name="title" value={formValues.title} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Authors:
        <input className={styles.inputField} type="text" name="authors" value={formValues.authors} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Journal Name:
        <input className={styles.inputField} type="text" name="journalName" value={formValues.journalName} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Year:
        <input className={styles.inputField} type="number" name="yearOfPublication" value={formValues.yearOfPublication} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Volume:
        <input className={styles.inputField} type="number" name="volume" value={formValues.volume} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Number:
        <input className={styles.inputField} type="number" name="number" value={formValues.number} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Pages:
        <input className={styles.inputField} type="text" name="pages" value={formValues.pages} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        DOI:
        <input className={styles.inputField} type="text" name="doi" value={formValues.doi} onChange={handleChange} />
      </label>
      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
};

export default SubmitForm;