'use client';
import { useState } from 'react';
import styles from '../styles/submitform.module.css';

interface SubmitFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  title: string;
  authors: string;
  journalName: string;
  yearOfPublication: number;
  volume: number;
  number: number;
  pages: string;
  DOI: string;
}

const SubmitForm: React.FC<SubmitFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    authors: '',
    journalName: '',
    yearOfPublication: 0,
    volume: 0,
    number: 0,
    pages: '',
    DOI: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} className={styles.inputField} />
        </label>
        <label className={styles.label}>
          Authors:
          <input type="text" name="authors" value={formData.authors} onChange={handleChange} className={styles.inputField} />
        </label>
        <label className={styles.label}>
          Journal Name:
          <input type="text" name="journalName" value={formData.journalName} onChange={handleChange} className={styles.inputField} />
        </label>
        <label className={styles.label}>
          Year of Publication:
          <input type="number" name="yearOfPublication" value={formData.yearOfPublication} onChange={handleChange} className={styles.inputField} />
        </label>
        <label className={styles.label}>
          Volume:
          <input type="number" name="volume" value={formData.volume} onChange={handleChange} className={styles.inputField} />
        </label>
        <label className={styles.label}>
          Number:
          <input type="number" name="number" value={formData.number} onChange={handleChange} className={styles.inputField} />
        </label>
        <label className={styles.label}>
          Pages:
          <input type="text" name="pages" value={formData.pages} onChange={handleChange} className={styles.inputField} />
        </label>
        <label className={styles.label}>
          DOI:
          <input type="text" name="DOI" value={formData.DOI} onChange={handleChange} className={styles.inputField} />
        </label>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default SubmitForm;