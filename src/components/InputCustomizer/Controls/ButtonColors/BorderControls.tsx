import React, { useState } from "react";
import {useMyContext} from "../../../../inputReducer";

const BorderControls = () => {
  const {dispatch} = useMyContext()
  const [borderColor, setBorderColor] = useState("slate");
  const [borderIntensity, setBorderIntensity] = useState("500");
  const [borderEnabled, setBorderEnabled] = useState(false);

  const getColorClass = (color: string) => {
    return color ? `bg-${color}-500` : "";
  };

  const handleBorderColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBorderColor(e.target.value);
    dispatch({type:'borderColor', payload: e.target.value})
  };
  const handelBorderIntensity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBorderIntensity(e.target.value);
    dispatch({type:'borderIntensity',payload:e.target.value})
  };
  const handleBorderCheckboxChange = () => {
    setBorderEnabled(!borderEnabled);
    dispatch({type:'border', payload: !borderEnabled ? 'yes' : 'no'})
  };
 
  return (
    <div>
      <label htmlFor="" className="text-xl dark:text-neutral-300">
        <input
          type="checkbox"
          name=""
          id=""
          checked={borderEnabled}
          onChange={handleBorderCheckboxChange}
          className="size-4 mr-3"
        />
        Border
      </label>
      {borderEnabled && (
        <div>
          <label htmlFor="" className="text-xl dark:text-neutral-300">
            Border Color
            <br />
            <select
              className={`rounded-full ${getColorClass(
                borderColor
              )} font-semibold border-2 border-black h-9 w-28 text-center text-black`}
              onChange={handleBorderColorChange}
            >
              <option value="" disabled>
                Border Color
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
          </label>
          <br />
          <label htmlFor="" className="text-xl dark:text-neutral-300">
            {" "}
            Intensity
            <br />
            <select
              name=""
              id=""
              className={`rounded-full  font-semibold border-2 border-black dark:text-neutral-900 text-center`}
              onChange={handelBorderIntensity}
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
        </div>
      )}
    </div>
  );
};

export default BorderControls;
