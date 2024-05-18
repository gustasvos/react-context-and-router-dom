import "./App.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cat } from "./components/Cat";
import { useToggle } from "./useToggle";
import { useCount } from "./useCount";

function App() {
  const [isVisible, toggle] = useToggle(); // custom hook
  const { count, increase, decrease, restart } = useCount();
  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1> Hidden text </h1>}
        <Cat />
        {count}
        <button onClick={increase}> + </button>
        <button onClick={decrease}> - </button>
        <button onClick={restart}> restart </button>
      </QueryClientProvider>
    </div>
  );
}

export default App;
