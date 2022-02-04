import React from 'react';
import { Header, Footer, layoutStyle } from './'
import { Main } from '../components/'

const Layout = () => {
  return (
    <div className={layoutStyle.doc}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;