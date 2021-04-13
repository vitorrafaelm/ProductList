import React from 'react';

import GlobalStyles from './styles/global';
import Routes from './routes'; 

import {ProductContext} from './context/productContext';

const App: React.FC = () => {
  return (
    <>
    <GlobalStyles />
      <ProductContext>
        <Routes />
      </ProductContext>
    </>
  )
}

export default App;
