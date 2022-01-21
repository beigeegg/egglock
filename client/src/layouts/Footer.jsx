import React from 'react';
import { footerStyle } from './'

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.inner_footer}>
        <h1>풋터영역입니다.</h1>
      </div>
    </footer>
  );
};

export default Footer;