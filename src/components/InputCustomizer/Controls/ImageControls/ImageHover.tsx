import { useState } from "react";
import { useMyContext } from "../../../../buttonReducer";

const ImageHover = () => {
  const { imageDispatch } = useMyContext();

  const [hoverEnabled, setHoverEnabled] = useState(false);
  const [hoverScale, setHoverScale] = useState("100");
  const [hoverDuration, setHoverDuration] = useState("200");

  const handleHoverCheckboxChange = () => {
    setHoverEnabled(!hoverEnabled);
    imageDispatch({ type: "hover", payload: "9" });
    imageDispatch({ type: "duration", payload: "9" });
    if (hoverEnabled) {
      imageDispatch({ type: "hover", payload: "no" });
    }
  };

  const handleHoverScale = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHoverScale(e.target.value);
    imageDispatch({ type: "hover", payload: e.target.value });
  };

  const handleHoverDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHoverDuration(e.target.value);
    imageDispatch({ type: "duration", payload: e.target.value });
  };

  return (
    <div className="block">
      <label
        htmlFor="hoverChekbox"
        className="text-xl dark:text-neutral-300 cursor-pointer"
      >
        <input
          type="checkbox"
          className="size-4 mr-3"
          id="hoverChekbox"
          checked={hoverEnabled}
          onChange={handleHoverCheckboxChange}
        />
        Hover
      </label>

      {hoverEnabled && (
        <div className="block">
          <label htmlFor="" className="text-xl dark:text-neutral-300 mr-3">
            Hover Scale
            <br />
            <input
              type="range"
              min="0"
              max="10"
              onChange={handleHoverScale}
              value={hoverScale}
              className="mr-3"
            />
          </label>
          <br />
          <label htmlFor="" className="text-xl dark:text-neutral-300">
            Transition Duration
            <br />
            <input
              type="range"
              min="0"
              max="9"
              onChange={handleHoverDuration}
              value={hoverDuration}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default ImageHover;
