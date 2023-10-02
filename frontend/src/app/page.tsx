import React from 'react';
import styles from './styles/homepage.module.css';
import Navbar from './Components/Navbar'; 

const HomePage: React.FC = () => {
  return (
    <div>
      <header className={styles.title}>
        <h1>SPEED</h1>
      </header>
      <Navbar />
    </div>
  );
};

export default HomePage;
