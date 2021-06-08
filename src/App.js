import './App.css';
import { useEffect, useState } from 'react';

import api from './services/api';
import Header from './Components/Header/Hearder';
import Home from './Pages/Home';

function App() {
  
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
