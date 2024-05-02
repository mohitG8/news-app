
import Navbar from "./components/Navbar.jsx";
import ItemBox from "./components/Itembox.jsx";
import { useState } from "react";

function App() {
 const [category,setCategory]=useState("general");

  return (
    <>
      <Navbar setCategory={setCategory}/>
      <ItemBox category={category}/>
    </>
  );
}

export default App;
