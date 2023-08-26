import { useState } from "react";
import "./App.css";
import { Button } from "./lib/components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button label="Lorem Ipsum" />
    </div>
  );
}

export default App;
