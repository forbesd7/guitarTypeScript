import React, { useState, createContext } from "react";

interface ListeningOptions {
  practiceChords: Array<string>;
  practiceTime: number;
}

const defaultListeningOptions = {
  practiceChords: ["AMaj", "DMaj", "EMaj", "CMaj", "FMaj"],
  practiceTime: 60
};

interface ListeningOptionsState {
  listeningOptions: ListeningOptions;
  setListeningOptions: React.Dispatch<React.SetStateAction<ListeningOptions>>;
}

const defaultListeningOptionsState = {
  listeningOptions: defaultListeningOptions,
  setListeningOptions: (): void => {}
};

export const ListeningContext = createContext<ListeningOptionsState>(
  defaultListeningOptionsState
);

export const ListeningContextProvider: React.FC = ({ children }) => {
  const [listeningOptions, setListeningOptions] = useState<ListeningOptions>(
    defaultListeningOptions
  );
  return (
    <ListeningContext.Provider
      value={{ listeningOptions, setListeningOptions }}
    >
      {children}
    </ListeningContext.Provider>
  );
};
