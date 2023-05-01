import React, { createContext, useState, ReactNode } from "react";

type ScrollingContextType = {
  scroll: string;
  setScroll: (scroll: string) => void;
};

const ScrollingContext = createContext<ScrollingContextType>({
  scroll: "",
  setScroll: () => {},
});

type ScrollingProviderProps = {
  children: ReactNode;
};

const ScrollingProvider = ({ children }: ScrollingProviderProps) => {
  const [scroll, setScroll] = useState("");

  return (
    <ScrollingContext.Provider value={{ scroll, setScroll }}>
      {children}
    </ScrollingContext.Provider>
  );
};

export { ScrollingContext, ScrollingProvider };
