import * as React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context";

export interface NavbarProps {
  text: "hello";
}

const Navbar: React.SFC<NavbarProps> = ({ text }) => {
  const { setCurView } = useContext(ThemeContext);
  const handleChange = (newView: string) => {
    setCurView(newView);
  };
  return (
    <div>
      <div
        onClick={() => {
          handleChange("listening");
        }}
      >
        Listening
      </div>

      <div
        onClick={() => {
          handleChange("chordChanges");
        }}
      >
        Chord Changes
      </div>
    </div>
  );
};

export default Navbar;

//  const inputRef = useRef<HTMLInputElement>(null);
//onclick type = e: React.MouseEvent<HTMLDivElement, MouseEvent>
//ref={inputRef}
