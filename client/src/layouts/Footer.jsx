import React from 'react';
import { footerStyle } from './'

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.inner_footer}>
      <h1 className={footerStyle.footText}>
        © beigeegg</h1>
      <h1 className={footerStyle.footText}>
        © 2022 beigeegg, korea.</h1>
      </div>
    </footer>
  );
};

export default Footer;