import { useState } from "react";
import { CiTextAlignLeft } from "react-icons/ci";
import { CiTextAlignRight } from "react-icons/ci";
import { CiTextAlignCenter } from "react-icons/ci";
import { CiTextAlignJustify } from "react-icons/ci";
import { useMyContext } from "../../../../buttonReducer";

const AlignControls = () => {
  const { textDispatch } = useMyContext();

  const [textAlign, setTextAlign] = useState("text-left");

  const handleCheckboxChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextAlign(e.target.value);
    textDispatch({ type: "align", payload: e.target.value });
  };

  return (
    <div className="block">
      <label
        htmlFor="text-left"
        className="flex items-center space-x-2 cursor-pointer"
      >
        <input
          type="checkbox"
          className="size-7"
          value="text-left"
          onChange={handleCheckboxChange}
          checked={textAlign === "text-left"}
          id="text-left"
        />{" "}
        <CiTextAlignLeft className="text-4xl dark:text-neutral-300 cursor-pointer" />
      </label>
      <label htmlFor="text-right" className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="size-7"
          value="text-right"
          onChange={handleCheckboxChange}
          checked={textAlign === "text-right"}
          id="text-right"
        />{" "}
        <CiTextAlignRight className="text-4xl dark:text-neutral-300 cursor-pointer" />
      </label>
      <label htmlFor="text-center" className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="size-7"
          value="text-center"
          onChange={handleCheckboxChange}
          checked={textAlign === "text-center"}
          id="text-center"
        />{" "}
        <CiTextAlignCenter className="text-4xl dark:text-neutral-300 cursor-pointer" />
      </label>
      <label htmlFor="text-justify" className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="size-7"
          value="text-justify"
          onChange={handleCheckboxChange}
          checked={textAlign === "text-justify"}
          id="text-justify"
        />{" "}
        <CiTextAlignJustify className="text-4xl dark:text-neutral-300 cursor-pointer" />
      </label>
    </div>
  );
};

export { AlignControls };
