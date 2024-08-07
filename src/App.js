import React from 'react';
import { ContextProvider } from './ContextProvider';
import Filter from './components/Filter';
import './App.css';

function App() {
  return (
    <ContextProvider>
      <div>
        <Filter />
      </div>
    </ContextProvider>
  );
}

export default App;
