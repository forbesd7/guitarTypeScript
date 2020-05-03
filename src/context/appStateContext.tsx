import React, { useState } from "react";

interface App {
  curView: string;
  hasPracticeStarted: Boolean;
}

interface AppState {
  state: App;
  setAppState: React.Dispatch<React.SetStateAction<App>>;
}

const defaultAppState: App = {
  curView: "listening",
  hasPracticeStarted: false,
};

const defaultAppStateContext: AppState = {
  state: defaultAppState,
  setAppState: (): void => {},
};

export const AppStateContext = React.createContext<AppState>(
  defaultAppStateContext
);

export const AppStateContextProvider: React.FC = ({ children }) => {
  const [state, setAppState] = useState(defaultAppState);

  return (
    <AppStateContext.Provider value={{ state, setAppState }}>
      {children}
    </AppStateContext.Provider>
  );
};
