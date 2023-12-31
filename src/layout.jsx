import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Question from "./pages/Question.jsx";
import Paper from "./components/Paper.jsx";
import Score from "./pages/Score.jsx";

import { createContext, useContext } from "react";
import Playing from "./pages/Playing.jsx";
import ConfirmBox from "./components/ConfirmBox.jsx";
import CounterLarge from "./components/CounterLarge.jsx";
import ScoreProvider from "./hooks/useScore.jsx";
import RemainingTime from "./components/RemainingTime.jsx";
import Category from "./components/Category.jsx";
import About from "./components/About.jsx";

const ThemeContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quizs/:id",
    element: <Question />,
  },
  {
    path: "/score",
    element: <Score />,
  },
  {
    path: "/playing/:category",
    element: <Playing />,
  },
  {
    path: "/confirm",
    element: <CounterLarge />,
  },
  {
    path: "/countdown",
    element: <RemainingTime />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/*",
    element: <Home />,
  },
]);

function Layout() {
  return (
    <>
      <ThemeContext.Provider value="dark">
        <ScoreProvider>
          <RouterProvider router={router} />
          <Paper />
        </ScoreProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default Layout;
