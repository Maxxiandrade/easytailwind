import React, { useState } from "react";
import { useMyContext } from "../../../../inputReducer";

const RoundedControls = () => {
  const { dispatch } = useMyContext();
  const [selected, setSelected] = useState<string | null>(null);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selected === e.target.value) {
      setSelected(null);
      dispatch({ type: "rounded", payload: "" });
    } else {
      setSelected(e.target.value);
      dispatch({ type: "rounded", payload: e.target.value });
    }
    console.log(e.target.value);
  };
  return (
    <div className="block">
      <label htmlFor="rounded" className="text-xl dark:text-neutral-300">
        <input
          type="checkbox"
          value="full"
          checked={selected === "full"}
          onChange={handleCheckboxChange}
          className="size-4 mr-3"
        />
        Rounded
      </label>
      <br />
      <label htmlFor="semirounded" className="text-xl dark:text-neutral-300">
        <input
          type="checkbox"
          value="md"
          checked={selected === "md"}
          onChange={handleCheckboxChange}
          className="size-4 mr-3"
        />
        Semirounded
      </label>
    </div>
  );
};

export default RoundedControls;
