import React, { useState } from "react";

interface viewContext {
  curView: string;
  setCurView: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = React.createContext<viewContext>({
  curView: "listening",
  setCurView: (): void => {}
});

interface App {
  curView: string;
  hasPracticeStarted: Boolean;
}

const defaultApp: App = {
  curView: "listening",
  hasPracticeStarted: false
};

interface AppState {
  state: App;
  setState: React.Dispatch<React.SetStateAction<App>>;
}

const defaultAppState: AppState = {
  state: defaultApp,
  setState: (): void => {}
};

export const AppContext = React.createContext<AppState>(defaultAppState);

export const AppContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<App>(defaultApp);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
export const ThemeContextProvider: React.FC = ({ children }) => {
  const [curView, setCurView] = useState("listening");

  return (
    <ThemeContext.Provider value={{ curView, setCurView }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
