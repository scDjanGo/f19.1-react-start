import { useState } from "react";
import MemoComponent from "./components/memoComponent";

export default function App() {
  const [input, setInput] = useState("")


  return (
    <div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write text"
      />
      <p>Content: {input}</p>



      ============
      <MemoComponent />
    </div>
  );
}
