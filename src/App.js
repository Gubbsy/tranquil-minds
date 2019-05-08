import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './Layouts/Contents/Content.js';
import Footer from './Layouts/Footer/Footer.js'

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
