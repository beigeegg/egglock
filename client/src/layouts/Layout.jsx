import React from 'react';
import { Header, Footer, layoutStyle } from './'

const Layout = () => {
  return (
    <div className={layoutStyle.doc}>
      <Header />
      <h1>레이아웃 페이지 입니다.</h1>
      <Footer />
    </div>
  );
};

export default Layout;