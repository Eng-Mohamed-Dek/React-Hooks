import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Pick a Color</h1>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-16 h-16 border-none cursor-pointer mb-4"
        />
        <div
          className="w-40 h-40 rounded-lg border-2 border-gray-300"
          style={{ backgroundColor: color }}
        ></div>
        <p className="mt-4 text-lg font-medium text-gray-600">Selected Color: <span style={{ color }}>{color}</span></p>
      </div>
    </div>
  );
};

export default ColorPicker;
