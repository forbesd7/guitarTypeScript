import * as React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context";
import { AppBar, Tabs, Tab } from "@material-ui/core";

export interface NavbarProps {
  text: "hello";
}

const Navbar: React.SFC<NavbarProps> = ({ text }) => {
  const [selectedTab, changeSelectedTab] = useState(0);
  const { setCurView } = useContext(ThemeContext);
  const changeView = (event: React.MouseEvent<{}>, newView: string) => {
    event.preventDefault();
    setCurView(newView);
  };

  const changeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    changeSelectedTab(newValue);
  };
  return (
    <AppBar>
      <Tabs value={selectedTab} onChange={changeTab}>
        <Tab
          onClick={e => {
            changeView(e, "listening");
          }}
          label="Listening"
        />
        <Tab
          onClick={e => {
            changeView(e, "chordChanges");
          }}
          label="Chord Changes"
        />
      </Tabs>
    </AppBar>
  );
};

export default Navbar;

//  const inputRef = useRef<HTMLInputElement>(null);
//onclick type = e: React.MouseEvent<HTMLDivElement, MouseEvent>
//ref={inputRef}
