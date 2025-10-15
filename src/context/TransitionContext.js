import React, { useState, createContext } from 'react';
import { fade } from '../animations/variants';

export const TransitionContext = createContext();

const TransitionProvider = ({ children }) => {
  const [animation, setAnimation] = useState(fade);

  return (
    <TransitionContext.Provider
      value={{
        animation,
        setAnimation,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;