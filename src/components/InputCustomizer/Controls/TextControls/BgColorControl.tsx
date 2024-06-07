import React, { useState } from "react";
import { handleSelection } from "../../../../utils/utils";


const BgColorControl = () => {
  const [bgColor, setBgColor] = useState("");
 
  const handleBgColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

    setBgColor(e.target.value);
  };
  const getColorClass = (color: string) => {
    return color ? `bg-${color}-500` : "";
  };

  const handleBgChange = ()=>{
    if(bgColor === 'none'){
        const customClass = ''
        console.log(customClass);
        
    }
    const customClass = `bg-${bgColor}-500`
    handleSelection(customClass)
    console.log(customClass);
    
  }
  return (
    <label htmlFor="" className="text-xl dark:text-neutral-300">
      Background Color
      <br />
      <select
        
        className={`rounded-md ${getColorClass(
          bgColor
        )} font-semibold border border-black h-9 w-34 text-center text-black `}
        onChange={handleBgColorChange}
      >
        <option value="" disabled>
          Color
        </option>
        <option value="none" className="bg-white">
          None
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
        <button onClick={handleBgChange}
        className=" text-neutral-900 dark:text-neutral-300 w-20 h-9 rounded-sm border border-neutral-900 dark:border-neutral-300 hover:scale-110 transition duration-300 ml-3 mt-5">Apply</button>
      </label>
    
  );
};

export default BgColorControl;
