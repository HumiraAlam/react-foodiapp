import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <Header setSearchValue={setSearchValue} searchValue={searchValue} />
      <Main searchValue={searchValue} />
    </div>
  );
}

export default App;
