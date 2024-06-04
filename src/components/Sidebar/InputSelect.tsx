import { useState } from "react";
import { useMyContext } from "../../inputReducer";



const InputSelect = () => {
  const {dispatch, state} = useMyContext()
  const [selectedOption, setSelectedOption] = useState<string | null>(state.input);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    dispatch({type: `${option}`, payload: option})
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-4xl text-neutral-900 dark:text-neutral-300 font-kanit">Input Select</h1>
      </div>
      <br />
      <br />
      <br />
      <ul className="flex-col justify-center">
        <li
          className={`text-4xl font-ubuntu ${selectedOption === "Button" ? "text-green-500" : "text-neutral-900 dark:text-neutral-300"}  cursor-pointer`}
          onClick={() => handleOptionSelect("Button")}
        >
          Button
        </li>
        <br />
        <br />
        <li
          className={`text-4xl font-ubuntu ${selectedOption === "Radio" ? "text-green-500" : "text-neutral-900 dark:text-neutral-300"}  cursor-pointer`}
          onClick={() => handleOptionSelect("Radio")}
        >
          Radio
        </li>
        <br />
        <br />
        <li
          className={`text-4xl font-ubuntu ${selectedOption === "Checkbox" ? "text-green-500" : "text-neutral-900 dark:text-neutral-300"} cursor-pointer`}
          onClick={() => handleOptionSelect("Checkbox")}
        >
          Checkbox
        </li>
        <br />
        <br />
        <li
          className={`text-4xl font-ubuntu ${selectedOption === "Text" ? "text-green-500" : "text-neutral-900 dark:text-neutral-300"} cursor-pointer`}
          onClick={() => handleOptionSelect("Text") }
        >
          Text
        </li>
      </ul>
    </>
  );
};

export default InputSelect;
