"use client";

import React, { useState } from 'react';
import styles from '../styles/submitform.module.css'

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
        <input className={styles.inputField} type="number" name="year" value={formValues.year} onChange={handleChange} />
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