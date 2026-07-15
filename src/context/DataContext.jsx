import React, { createContext, useContext, useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(portfolioData);

  // In the future, if you want to restore the Google Sheets sync, you can add it here inside a useEffect.
  
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
