import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#000000")

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Pick a Color</h1>
        <input type="color" onChange={(event) => setColor(event.target.value)} value={color}
        className="h-16 w-16 border-none cursor-pointer mb-4"
        />
        <div style={{ backgroundColor: color }}
        className="w-40 h-40 rounded-lg border-2 border-gray-300"
        ></div>
        <p className="mt-4 text-sm font-light text-slate-400">Selected Color: <span style={{ color }}className="font-semibold">{color}</span></p>
      </div>
    </div>
  );
};

export default App;
