import { useEffect } from "react";

import Main from "./conponents/Main";
import Labels from "./conponents/Labels";
import Header from "./conponents/Header";
import { useDirection } from "./context/DirectionContext";

const App = () => {
  const { direction } = useDirection();

  useEffect(() => {
    document.body.dir = direction;
  }, [direction]);

  return (
    <div className="app">
      <Header />
      <Labels />
      <Main />
    </div>
  );
};

export default App;
