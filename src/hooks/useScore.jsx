import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const ScoreContext = createContext();

function ScoreProvider({ children }) {
  const [score, setScore] = useState(0);
  const [rightAns, setRightAns] = useState([]);
  const [selectedAns, setSelectedAns] = useState([]);
  const [category, setCategory] = useState("General");
  return (
    <ScoreContext.Provider
      value={{
        score: score,
        setScore: setScore,
        rightAns: rightAns,
        setRightAns: setRightAns,
        selectedAns: selectedAns,
        setSelectedAns,
        setCategory: setCategory,
        category: category,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export default ScoreProvider;

export const useScore = () => {
  const {
    score,
    setScore,
    selectedAns,
    rightAns,
    setRightAns,
    setSelectedAns,
    category,
    setCategory,
  } = useContext(ScoreContext);
  return {
    score,
    setScore,
    selectedAns,
    rightAns,
    setRightAns,
    setSelectedAns,
    category,
    setCategory,
  };
};
