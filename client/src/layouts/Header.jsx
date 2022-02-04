import React from 'react';
import { headerStyle } from './'

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.inner_header}>
        <h1 className={headerStyle.header_title}>헤더 영역입니다..</h1>
      </div>
    </header>
  );
};

export default Header;