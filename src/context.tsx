import React, { useState } from "react";

interface viewContext {
  curView: string;
  setCurView: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = React.createContext<viewContext>({
  curView: "listening",
  setCurView: (): void => {}
});

interface listeningPracticeOptions {
  practiceLength: number;
  chordsToPractice: Array<string>;
  numberOfQuestions: number;
}

const listeningPracticeContext = React.createContext<listeningPracticeOptions>({
  practiceLength: 60,
  chordsToPractice: ["a"],
  numberOfQuestions: 10
});

// export const listeningContextProvider = React.FC = ({children}) => {
//   return (
//     <listeningPracticeContext.Provider value={2}>{children}</listeningPracticeContext.Provider>
//   )
// }

interface App {
  curView: string;
  hasPracticeStarted: boolean;
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
