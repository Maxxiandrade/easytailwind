import React, { useState } from "react";
import { useMyContext } from "../../../../inputReducer";

const TextControls = () => {
  const [textColor, setTextColor] = useState("slate");
  const [, setTextIntensity] = useState("500");
  const { dispatch } = useMyContext();
  const handleTextColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTextColor(e.target.value);
    dispatch({ type: "textColor", payload: e.target.value });
  };
  const handleTextIntensity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTextIntensity(e.target.value);
    dispatch({ type: "textIntensity", payload: e.target.value });
  };

  const getColorClass = (color: string) => {
    return color ? `bg-${color}-500` : "";
  };

  return (
    <label htmlFor="" className="text-xl dark:text-neutral-300">
      <br />
      Text Color
      <br />
      <select
        className={`rounded-md ${getColorClass(
          textColor
        )} font-semibold border border-black h-9 w-28 text-center text-black `}
        onChange={handleTextColorChange}
      >
        <option value="" disabled>
          Color
        </option>
        <option value="slate" className="slate">
          Slate
        </option>
        <option value="gray" className="gray">
          Gray
        </option>
        <option value="zinc" className="zinc">
          Zinc
        </option>
        <option value="neutral" className="neutral">
          Neutral
        </option>
        <option value="stone" className="stone">
          Stone
        </option>
        <option value="red" className="red">
          Red
        </option>
        <option value="orange" className="orange">
          Orange
        </option>
        <option value="amber" className="amber">
          Amber
        </option>
        <option value="yellow" className="yellow">
          Yellow
        </option>
        <option value="lime" className="lime">
          Lime
        </option>
        <option value="green" className="green">
          Green
        </option>
        <option value="emerald" className="emerald">
          Emerald
        </option>
        <option value="teal" className="teal">
          Teal
        </option>
        <option value="cyan" className="cyan">
          Cyan
        </option>
        <option value="sky" className="sky">
          Sky
        </option>
        <option value="blue" className="blue">
          Blue
        </option>
        <option value="indigo" className="indigo">
          Indigo
        </option>
        <option value="violet" className="violet">
          Violet
        </option>
        <option value="purple" className="purple">
          Purple
        </option>
        <option value="fuchsia" className="fuchsia">
          Fuchsia
        </option>
        <option value="pink" className="pink">
          Pink
        </option>
        <option value="rose" className="rose">
          Rose
        </option>
      </select>
      <br />
      <label htmlFor="">
        {" "}
        Intensity
        <br />
        <select
          name=""
          id=""
          className={`rounded-md  font-semibold border border-black dark:text-neutral-900 h-9 w-34 text-center `}
          onChange={handleTextIntensity}
        >
          <option value="500" className="dark:text-neutral-300">
            Default (500)
          </option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
          <option value="950">950</option>
        </select>
      </label>
    </label>
  );
};

export default TextControls;
