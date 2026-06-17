import { Component, useEffect, useState } from "react";
import TestUseEffect from "./useEffect/TestUseEffect";

const BASE_URL = `https://jsonplaceholder.typicode.com/todos/`

function App() {


  useEffect(() => {
    console.log("component did mount")
  }, [])

  return (
    <div>
      <TestUseEffect />
    </div>
  );
}

export default App;




class Comp extends Component {

}