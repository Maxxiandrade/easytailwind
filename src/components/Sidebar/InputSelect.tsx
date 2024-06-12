import { useState } from "react";
import { useMyContext } from "../../buttonReducer";

const InputSelect = () => {
  const { dispatch, state } = useMyContext();
  const [selectedOption, setSelectedOption] = useState<string | null>(
    state.input
  );

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    dispatch({ type: `${option}`, payload: option });
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-4xl text-neutral-900 dark:text-neutral-300 font-kanit">
          Component Select
        </h1>
      </div>
      <br />
      <br />
      <br />
      <ul className="flex-col justify-center">
        <li
          className={`text-2xl font-ubuntu ${
            selectedOption === "Button"
              ? "text-green-500"
              : "text-neutral-900 dark:text-neutral-300"
          }  cursor-pointer`}
          onClick={() => handleOptionSelect("Button")}
        >
          Button
        </li>
        <br />
        <br />
        <li
          className={`text-2xl font-ubuntu ${
            selectedOption === "Image"
              ? "text-green-500"
              : "text-neutral-900 dark:text-neutral-300"
          } cursor-pointer`}
          onClick={() => handleOptionSelect("Image")}
        >
          Image
        </li>
        <br />
        <br />
        <li
          className={`text-2xl font-ubuntu ${
            selectedOption === "Text"
              ? "text-green-500"
              : "text-neutral-900 dark:text-neutral-300"
          } cursor-pointer`}
          onClick={() => handleOptionSelect("Text")}
        >
          Text
        </li>
      </ul>
    </>
  );
};

export default InputSelect;
