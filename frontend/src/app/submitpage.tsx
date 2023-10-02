import React from 'react';
import styles from './styles/homepage.module.css';
import Navbar from './Components/Navbar'; 
//import React, { useState } from 'react';

const SubmitPage: React.FC = () => {
  /*return (
    <div>
      <header className={styles.title}>
        <h1>SPEED</h1>
      </header>
      <Navbar />
    </div>
  );*/
  /*
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    journalName: '',
    yearOfPublication: '',
    volume: '',
    number: '',
    pages: '',
    doi: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to an API or perform other actions
    console.log(formData);
  };
  */

  return (
    <div>
      <h1>Submit Journal Information</h1>
      <form /*</div>onSubmit={handleSubmit}*/>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            //value={formData.title}
            //onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Authors:</label>
          <input
            type="text"
            name="authors"
            ///value={formData.authors}
           // onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Journal Name:</label>
          <input
            type="text"
            name="journalName"
            //value={formData.journalName}
            //onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Year of Publication:</label>
          <input
            type="text"
            name="yearOfPublication"
           // value={formData.yearOfPublication}
           // onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Volume:</label>
          <input
            type="text"
            name="volume"
           // value={formData.volume}
            //onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            type="text"
            name="number"
            //value={formData.number}
            //onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Pages:</label>
          <input
            type="text"
            name="pages"
            //value={formData.pages}
            //onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>DOI:</label>
          <input
            type="text"
            name="doi"
            //value={formData.doi}
            //onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitPage;
