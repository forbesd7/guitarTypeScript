import React, { useState } from "react";

interface viewContext {
  curView: string;
  setCurView: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = React.createContext<viewContext>({
  curView: "aa",
  setCurView: (): void => {}
});

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [curView, setCurView] = useState("practiceChoices");

  return (
    <ThemeContext.Provider value={{ curView, setCurView }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
