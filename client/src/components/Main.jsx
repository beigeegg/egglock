import React from 'react';
import { Clock, mainStyle } from './';

const Main = () => {
  return (
    <main className={mainStyle.doc_main}>
      <Clock />
    </main>
  );
};

export default Main;