import React, { useState } from "react";
import { useMyContext } from "../../../../buttonReducer";

const RoundedControls = () => {
  const { imageDispatch } = useMyContext();
  const [selected, setSelected] = useState<string | null>(null);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selected === e.target.value) {
      setSelected(null);
      imageDispatch({ type: "rounded", payload: "" });
    } else {
      setSelected(e.target.value);
      imageDispatch({ type: "rounded", payload: e.target.value });
    }
    console.log(e.target.value);
  };
  return (
    <div className="block">
      <label htmlFor="rounded" className="text-xl dark:text-neutral-300 cursor-pointer">
        <input
          id="rounded"
          type="checkbox"
          value="full"
          checked={selected === "full"}
          onChange={handleCheckboxChange}
          className="size-4 mr-3 mb-4"
        />
        Full Rounded
      </label>
      <br />
      <label htmlFor="smallrounded" className="text-xl dark:text-neutral-300 cursor-pointer">
        <input
          id="smallrounded"
          type="checkbox"
          value="sm"
          checked={selected === "sm"}
          onChange={handleCheckboxChange}
          className="size-4 mr-3 mb-4"
        />
        Small Rounded
      </label>
      <br />
      <label htmlFor="mediumrounded" className="text-xl dark:text-neutral-300 cursor-pointer">
        <input
          id="mediumrounded"
          type="checkbox"
          value="md"
          checked={selected === "md"}
          onChange={handleCheckboxChange}
          className="size-4 mr-3 mb-4"
        />
        Medium Rounded
      </label>
      <br />
      <label htmlFor="largerounded" className="text-xl dark:text-neutral-300 cursor-pointer">
        <input
          id="largerounded"
          type="checkbox"
          value="lg"
          checked={selected === "lg"}
          onChange={handleCheckboxChange}
          className="size-4 mr-3 mb-4"
        />
        Large Rounded
      </label>
    </div>
  );
};

export default RoundedControls;
