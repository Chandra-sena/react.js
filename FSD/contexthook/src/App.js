import React, { createContext, useContext } from 'react';

// Create a context
const ThemeContext = createContext();

function App() {
  return (
    // Provide the context value at the top level
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  // Consume the context value within a component
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default App;
