import React from "react";
import "./App.css";
import CustomRouter from "./CustomRouter";
import { FetchControls } from "./FetchControls";
import { ScrollToTop } from "./ScrollToTop";

export default function App() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <CustomRouter />
      <FetchControls />
    </React.Fragment>
  );
}
