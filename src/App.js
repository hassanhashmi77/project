import React from 'react';
import './App.css';
import Allcomponent from './Allcomponent';
import { GlobProvider } from './hookuse/UseContext';

function App() {
  return (
    <GlobProvider>


      <Allcomponent />
    </GlobProvider>
  );
}

export default App;
