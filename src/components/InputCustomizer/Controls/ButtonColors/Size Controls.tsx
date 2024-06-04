import React, { useState } from "react";

const SizeControls = () => {
  const [size, setSize] = useState("0");
  const [buttonWidth, setButtonWidth] = useState("12");
  const [buttonHeight, setButtonHeight] = useState("6");
  const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value);
    console.log(e.target.value);
  };

  const handleWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setButtonWidth(e.target.value);
  };
  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setButtonHeight(e.target.value);
  };
  return (
    <div>
      <label htmlFor="" className="text-xl dark:text-neutral-300">
        Size
        <br />
        <input
          type="range"
          min="1"
          max="96"
          onChange={handleSize}
          value={size}
        />
      </label>
      <br />
      <label htmlFor="" className="text-xl dark:text-neutral-300">
        Width
        <input
          type="text"
          className="rounded-full w-16 ml-5 text-black text-center"
          value={buttonWidth}
          onChange={handleWidth}
        />
      </label>
      <br />
      <br />
      <label htmlFor="" className="text-xl dark:text-neutral-300">
        Height
        <input
          type="text"
          className="rounded-full w-16 ml-4 text-black text-center"
          value={buttonHeight}
          onChange={handleHeight}
        />
      </label>
    </div>
  );
};

export default SizeControls;
