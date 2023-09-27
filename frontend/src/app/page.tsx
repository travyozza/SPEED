import React from 'react';
import styles from './homepage.module.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <header className={styles.title}>
        <h1>Your App Name</h1>
      </header>

      <nav className={styles.navbar}>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
        </ul>
      </nav>

      {/* Add your main content here */}
    </div>
  );
};

export default HomePage;
