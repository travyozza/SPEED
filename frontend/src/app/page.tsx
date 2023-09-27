import React from 'react';
import styles from './homepage.module.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <header className={styles.title}>
        <h1>SPEED</h1>
      </header>

      <nav className={styles.navbar}>
        <ul>
          <li><a href="#">Submit</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">Moderator Login</a></li>
          <li><a href="#">Analyst Login</a></li>
          <li><a href="#">Admin Login</a></li>
        </ul>
      </nav>

      {/* Add your main content here */}
    </div>
  );
};

export default HomePage;
