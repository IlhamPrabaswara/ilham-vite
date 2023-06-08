import "./App.css";
import { Text } from "@chakra-ui/react";
import React from "react";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NavBar from "./NavBar";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
  )
)

function App({ routes }) {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
