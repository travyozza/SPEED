import React from 'react';
import styles from '../styles/homepage.module.css'; 
import Link from 'next/link';

const Navbar: React.FC = () => {
  
  return (
    <nav className={styles.navbar}>
      <ul>
      <li><Link href="/Pages/SubmitPage">Submit</Link></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Moderator Login</a></li>
        <li><a href="#">Analyst Login</a></li>
        <li><a href="#">Admin Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;