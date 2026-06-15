import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;

    setInputValue(value);
  };

  const handleAdd = () => {
    if (inputValue === "") return;
    setItems((prev) => [inputValue, ...prev]);
    setInputValue("");
  };

  return (
    <div className="p-5">
      <div className="flex items-center gap-3 text-[14px]">
        <input
          type="text"
          placeholder="Write text"
          className="border rounded-lg "
          value={inputValue}
          onChange={handleChange}
        />
        <button
          onClick={handleAdd}
          className="bg-black rounded-lg text-white min-w-5.75 min-h-5.75"
        >
          +
        </button>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;


