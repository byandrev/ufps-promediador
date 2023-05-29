import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SubjectsProvider from "./context/SubjectsContext.jsx";
import ModalProvider from "./context/ModalContext.jsx";
import theme from "./theme/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ModalProvider>
        <SubjectsProvider>
          <App />
        </SubjectsProvider>
      </ModalProvider>
    </ChakraProvider>
  </React.StrictMode>
);
