import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export function ContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://65ffa099df565f1a614527ba.mockapi.io/api/v1/category')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    // <main>
    //   <Table data={data} />
    // </main>
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
}
