import React from "react"
import Layout from "./src/components/Layout"
import TransitionProvider from './src/context/TransitionContext';
import { ThemeManager } from './src/context/ThemeContext';
import "lazysizes"
import "prismjs/themes/prism-tomorrow.css"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return <ThemeManager><TransitionProvider>{element}</TransitionProvider></ThemeManager>;
};
