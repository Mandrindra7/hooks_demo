import { useState, useCallback } from "react";

import "./App.css";
import Menu from "./components/Menu";
import data from "./data/Menu";

const init = data.map((item) => item.principal);

function App() {
  const [menu, setMenu] = useState(init);

  const onFilter = useCallback(
    (filter: any) => {
      const _menu = data.map((item) => item[filter]);
      setMenu(_menu);
    },
    [menu]
  );

  return (
    <div className="App">
      <h1>Demo</h1>
      <Menu menu={menu} onFilter={onFilter} />
    </div>
  );
}

export default App;
