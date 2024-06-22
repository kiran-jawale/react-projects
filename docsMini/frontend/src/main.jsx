import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout/Layout.jsx";
import { Home, Docs, About, Contact, Help } from "./pages";
import { ThemeProvider } from "./contexts/themeContext.jsx";
import { DomProvider } from "./contexts/handleDom.jsx";
import { Route, RouterProvider } from "react-router-dom";

import "./index.css";
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="docs" element={<Docs />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="help" element={<Help />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <DomProvider>
      <RouterProvider router={router} />
    </DomProvider>
  </ThemeProvider>
);
