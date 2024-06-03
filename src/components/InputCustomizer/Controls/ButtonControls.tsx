import { ChangeEvent, useState } from "react";

const ButtonControls = () => {
  const [textColor, setTextColor] = useState("slate");
  const [textIntensity, setTextIntensity] = useState("500");
  const [bgColor, setBgColor] = useState("slate");
  const [bgIntensity, setBgIntensity] = useState("500");
  const [borderColor, setBorderColor] = useState("slate");
  const [borderIntensity, setBorderIntensity] = useState("500");
  const [borderEnabled, setBorderEnabled] = useState(false);
  const [hoverEnabled, setHoverEnabled] = useState(false);
  const [hoverColor, setHoverColor] = useState("slate");
  const [hoverIntensity, setHoverIntensity] = useState("500");
  const [hoverBgColor, setHoverBgColor] = useState("slate");
  const [hoverBgIntensity, setHoverBgIntensity] = useState("500");
  const [hoverScale, setHoverScale] = useState("150");
  const [hoverDuration, setHoverDuration] = useState("200");
  const [size, setSize] = useState("0");
  const [buttonWidth, setButtonWidth] = useState('12')
  const [buttonHeight, setButtonHeight] = useState('6')

  const handleTextColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTextColor(e.target.value);
  };
  const handleTextIntensity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTextIntensity(e.target.value);
    console.log(e.target.value);
  };
  const handleBgColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBgColor(e.target.value);
  };

  const handleBgIntensity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBgIntensity(e.target.value);
    console.log(e.target.value);
  };
  const getColorClass = (color: string) => {
    return color ? `bg-${color}-500` : "";
  };

  const handleBorderColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBorderColor(e.target.value);
  };
  const handelBorderIntensity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBorderIntensity(e.target.value);
    console.log(e.target.value);
  };
  const handleBorderCheckboxChange = () => {
    setBorderEnabled(!borderEnabled);
  };

  const handleHoverCheckboxChange = () => {
    setHoverEnabled(!hoverEnabled);
  };

  const handleHoverColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHoverColor(e.target.value);
  };
  const handleHoverIntensity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHoverIntensity(e.target.value);
  };

  const handleHoverBgColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHoverBgColor(e.target.value);
  };

  const handleHoverBgIntensity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHoverBgIntensity(e.target.value);
  };

  const handleSize = (e: ChangeEvent<HTMLInputElement>)=>{
    setSize(e.target.value)
    console.log(e.target.value);
    
  }

  const handleHoverScale = (e: ChangeEvent<HTMLInputElement>)=>{
    setHoverScale(e.target.value)
    console.log(e.target.value);
  }

  const handleHoverDuration = (e: ChangeEvent<HTMLInputElement>) =>{
    setHoverDuration(e.target.value)
    console.log(e.target.value);
    
  }

  const handleWidth = (e: ChangeEvent<HTMLInputElement>)=>{
    setButtonWidth(e.target.value)
 
    
  }
  const handleHeight = (e: ChangeEvent<HTMLInputElement>)=>{
    setButtonHeight(e.target.value) 
    
  }
  const handleLogs = () => {
    console.log(`width: ${buttonWidth}, height: ${buttonHeight}`);
    console.log(`Texto ${textColor}, intensidad ${textIntensity}`);
    console.log(`Fondo ${bgColor}, intensidad ${bgIntensity}`);
    console.log(
      `Borde ${borderEnabled ? "Sí" : "No"}. ${
        borderEnabled && ` Color ${borderColor}, intensidad ${borderIntensity}`
      }`
    );
    console.log(`Hover ${hoverEnabled ? "Sí" : "No"}`);
    if (hoverEnabled) {
      console.log(
        `Color de texto del hover: ${hoverColor}, con intensidad de: ${hoverIntensity}. BG color: ${hoverBgColor}, con intensidad de: ${hoverBgIntensity}`
      );
    }
  };
  return (
    <div className="flex justify-around">
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
      <div>

      <label htmlFor="" className="text-xl dark:text-neutral-300">
        Size
        <br />
        <input type="range" min='1' max='96' onChange={handleSize} value={size}/>
      </label>
      <br />
      <label htmlFor="" className="text-xl dark:text-neutral-300">Width
      <input type="text" className="rounded-full w-16 ml-5 text-black text-center" value={buttonWidth} onChange={handleWidth}/></label>
      <br />
      <br />
      <label htmlFor="" className="text-xl dark:text-neutral-300">Height
      <input type="text" className="rounded-full w-16 ml-4 text-black text-center" value={buttonHeight} onChange={handleHeight}/></label>
      </div>
        <br />
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
              Hover Color & Intensity
              <br />
              <div className="flex justify-between">
                <select
                  className={`rounded-full ${getColorClass(
                    hoverColor
                  )} font-semibold border-2 border-black h-9 w-28 text-center text-black`}
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
                  className={`rounded-full  font-semibold border-2 border-black dark:text-neutral-900 h-9 w-34 text-center`}
                  onChange={handleHoverIntensity}
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
              </div>
            </label>
            <label htmlFor="" className="text-xl dark:text-neutral-300">
              Hover Background Color & Intensity
              <br />
              <div className="flex justify-between">
                <select
                  className={`rounded-full ${getColorClass(
                    hoverBgColor
                  )} font-semibold border-2 border-black h-9 w-28 text-center text-black`}
                  onChange={handleHoverBgColor}
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
                  className={`rounded-full  font-semibold border-2 border-black dark:text-neutral-900 h-9 w-34 text-center`}
                  onChange={handleHoverBgIntensity}
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
            <input type="range" min='0' max='150' onChange={handleHoverScale} value={hoverScale}/>
          </label>
          <br />
          <br />
          <label htmlFor="" className="text-xl dark:text-neutral-300">
            Hover Duration
            <br />
            <input type="range" min='0' max='1000' onChange={handleHoverDuration} value={hoverDuration}/>
          </label>
        </div>
      )}
      <label htmlFor="" className="text-xl dark:text-neutral-300">
        <br />
        Text Color
        <br />
        <select
          className={`rounded-full ${getColorClass(
            textColor
          )} font-semibold border-2 border-black h-9 w-28 text-center text-black `}
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
            className={`rounded-full  font-semibold border-2 border-black dark:text-neutral-900 h-9 w-34 text-center `}
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
      <label htmlFor="" className="text-xl dark:text-neutral-300">
        <br />
        Background Color
        <br />
        <select
          className={`rounded-full ${getColorClass(
            bgColor
          )} font-semibold border-2 border-black h-9 w-34 text-center text-black `}
          onChange={handleBgColorChange}
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
            className={`rounded-full  font-semibold border-2 border-black dark:text-neutral-900 text-center mt-1`}
            onChange={handleBgIntensity}
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
      <button onClick={handleLogs}>Logg</button>
    </div>
  );
};

export default ButtonControls;
