import * as React from "react";
import { useState, useRef, useContext } from "react";
import { ThemeContext } from "../context";
export interface NavbarProps {
  text: "hello";
}

const Navbar: React.SFC<NavbarProps> = ({ text }) => {
  const { curView, setCurView } = useContext(ThemeContext);
  const inputRef = useRef<HTMLInputElement>(null);
  return <div ref={inputRef}>{curView}</div>;
};

export default Navbar;
