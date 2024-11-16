import styles from '../styles/Footer.module.css'
import React from 'react';

export default function Footer() {
  return (
    <div className='flex justify-center pt-[100px]'>
            <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <a href="/"><img src="logo.png" alt="Logo" className={styles.logo} /></a>
          <p className={styles.description}>
            OurStudio is a digital agency UI / UX Design and Website Development located in Ohio,
            United States of America
          </p>
          <p className={styles.copyright}>Copyright Tanah Air Studio</p>
        </div>

        <div className='mr-[200px]'>
        <div className={styles.section}>
          <h4 className='pt-[20px]'>Company</h4><br />
          <ul>
            <li><a href="/">Home</a></li><br />
            <li><a href="/showroom">Showroom</a></li><br />
            <li><a href="/faq">FAQ</a></li><br />
            <li><a href="/blog">Blog</a></li><br />
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        </div>


        <div className='mr-[100px]'>
        <div className={styles.section}>
          <h4 className='pt-[20px]'>Social</h4><br />
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li><br />
            <li><a href="https://www.instagram.com/_sma__13/">Instagram</a></li><br />
            <li><a href="https://www.youtube.com/channel/UCqRpiK37mbohuu-LhV4Biaw">YouTube</a></li><br />
            <li><a href="https://twitter.com">Twitter</a></li><br />
            <li><a href="https://www.linkedin.com/in/muhammadamirxon-sobirxonov-070483333/">LinkedIn</a></li>
          </ul>
        </div>
        </div>

        <div className='ml-[100px]'>
        <div className={styles.section}>
          <h4 className='pt-[20px]'>Contact</h4><br />
          <p>📍 221 B Santa Monica, Los Angeles</p><br />
          <p>📞 (+998) 95 951 77 75</p><br />
          <p>✉️ contact@tanahairstudio.com</p>
        </div>
      </div>
        </div>

    </footer>
    </div>
  );
}

  