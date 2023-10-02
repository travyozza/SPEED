import React from 'react';
import styles from './styles/homepage.module.css';
import Navbar from './Navbar'; 


const submit: React.FC = () => {
  return (
    <div>
      <header className={styles.title}>
        <h1>Testing</h1>
      </header>
      <Navbar />
      
    </div>
  );
};

export default submit;
