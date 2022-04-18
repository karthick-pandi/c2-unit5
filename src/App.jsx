import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setToggle(toggle);
        }}
        className="togglebtn"
      >
        {toggle ? "Add anew student" : "goto student"}
      </button>
      {toggle ? <AddStudent /> : <ShowStudents />}
    </div>
  );
}

export default App;
