import React, { useState } from "react";
import { useMyContext } from "../../../../inputReducer";

const SizeControls = () => {
  const {dispatch} = useMyContext()
  const [buttonWidth, setButtonWidth] = useState("12");
  const [buttonHeight, setButtonHeight] = useState("6");

  const handleWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setButtonWidth(e.target.value);
    dispatch({type:'w',payload:e.target.value})
  };
  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setButtonHeight(e.target.value);
    dispatch({type:'h',payload:e.target.value})
  };
  return (
    <div>
      <label htmlFor="" className="text-xl dark:text-neutral-300">
        Size:
        <br />
       
      </label>
      <br />
      <label htmlFor="" className="text-xl dark:text-neutral-300">
        Width
        <input
          type="text"
          className="rounded-md w-16 ml-5 text-black text-center"
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
          className="rounded-md w-16 ml-4 text-black text-center"
          value={buttonHeight}
          onChange={handleHeight}
        />
      </label>
    </div>
  );
};

export default SizeControls;
