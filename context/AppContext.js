import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showSidebar,setShowSidebar] = useState(false);

  // all values
  const value = {
    showSidebar,setShowSidebar,
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;