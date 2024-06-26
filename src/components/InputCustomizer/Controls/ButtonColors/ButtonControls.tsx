import { ChangeEvent, useState } from "react";
import { useMyContext } from "../../../../buttonReducer";
import BorderControls from "./BorderControls";
import SizeControls from "./Size Controls";
import RoundedControls from "./RoundedControls";
import BackgroundControls from "./BackgroundControls";
import TextControls from "./TextControls";

const ButtonControls = () => {
  const [hoverEnabled, setHoverEnabled] = useState(false);
  const [hoverColor, setHoverColor] = useState("slate");
  const [, setHoverIntensity] = useState("500");
  const [hoverBgColor, setHoverBgColor] = useState("");
  const [, setHoverBgIntensity] = useState("500");
  const [hoverScale, setHoverScale] = useState("100");
  const [hoverDuration, setHoverDuration] = useState("200");
  const { dispatch } = useMyContext();

  const handleHoverCheckboxChange = () => {
    setHoverEnabled(!hoverEnabled);
    dispatch({ type: "hover", payload: "9" });
    dispatch({ type: "duration", payload: "9" });
    if (hoverEnabled) {
      dispatch({ type: "hover", payload: "no" });
    }
  };

  const handleHoverColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHoverColor(e.target.value);
    dispatch({ type: "hoverText", payload: e.target.value });
  };
  const handleHoverIntensity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHoverIntensity(e.target.value);
    dispatch({ type: "hoverTextIntensity", payload: e.target.value });
  };

  const handleHoverBgColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHoverBgColor(e.target.value);
    dispatch({ type: "hoverBg", payload: e.target.value });
  };

  const handleHoverBgIntensity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHoverBgIntensity(e.target.value);
    dispatch({ type: "hoverBgIntensity", payload: e.target.value });
  };

  const handleHoverScale = (e: ChangeEvent<HTMLInputElement>) => {
    setHoverScale(e.target.value);
    dispatch({ type: "hover", payload: e.target.value });
  };

  const handleHoverDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setHoverDuration(e.target.value);
    dispatch({ type: "duration", payload: e.target.value });
  };

  const getColorClass = (color: string) => {
    return color ? `bg-${color}-500` : "";
  };

  return (
    <div className="flex justify-around">
      <BorderControls />
      <SizeControls />
      <RoundedControls />
      <br />
      {/* Hover controls */}
      <div>
        <label htmlFor="" className="text-xl dark:text-neutral-300">
          <input
            type="checkbox"
            className="size-4 mr-3"
            checked={hoverEnabled}
            onChange={handleHoverCheckboxChange}
          />
          Hover
        </label>
        {hoverEnabled && (
          <>
            <br />
            <label htmlFor="" className="text-xl dark:text-neutral-300">
              Hover Text Color & Intensity
              <br />
              <div className="flex justify-between">
                <select
                  className={`rounded-md ${getColorClass(
                    hoverColor
                  )} font-semibold border border-black h-9 w-28 text-center text-black`}
                  onChange={handleHoverColorChange}
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

                <select
                  name=""
                  id=""
                  className={`rounded-md  font-semibold border border-black dark:text-neutral-900 h-9 w-34 text-center`}
                  onChange={handleHoverIntensity}
                >
                  <option value="500" className="dark:text-neutral-300">
                    -
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
              </div>
            </label>
            <label htmlFor="" className="text-xl dark:text-neutral-300">
              Hover Background Color & Intensity
              <br />
              <div className="flex justify-between">
                <select
                  className={`rounded-md ${getColorClass(
                    hoverBgColor
                  )} font-semibold border border-black h-9 w-28 text-center text-black`}
                  onChange={handleHoverBgColor}
                >
                  <option value="" disabled>
                    Color
                  </option>
                  <option value="white" className="bg-white">
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

                <select
                  name=""
                  id=""
                  className={`rounded-md  font-semibold border border-black dark:text-neutral-900 h-9 w-34 text-center`}
                  onChange={handleHoverBgIntensity}
                >
                  <option value="500" className="dark:text-neutral-300">
                    -
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
              </div>
            </label>
          </>
        )}
      </div>
      {hoverEnabled && (
        <div>
          <br />
          <label htmlFor="" className="text-xl dark:text-neutral-300">
            Hover Scale
            <br />
            <input
              type="range"
              min="0"
              max="10"
              onChange={handleHoverScale}
              value={hoverScale}
            />
          </label>
          <br />
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
      <TextControls />
      <BackgroundControls />
    </div>
  );
};

export default ButtonControls;
