import { useState, useReducer } from "react";

const initialState = {
  input: ''
}

function reducer(state, action) {
  switch(action.type){
    case 'Button':
      return { input : 'Button'};
    case 'Radio':
      return { input : 'Radio' };
    case 'Checkbox':
      return { input : 'Checkbox'};
    case 'Text':
      return { input: 'Text' };
    default:
      return { input: ''}
  }
}

const InputSelect = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-4xl text-neutral-900 dark:text-neutral-300">Input Select</h1>
      </div>
      <br />
      <br />
      <br />
      <ul className="flex-col justify-center">
        <li
          className={`text-4xl ${selectedOption === "Button" ? "text-green-500" : "text-neutral-900 dark:text-neutral-300"}  cursor-pointer`}
          onClick={() => handleOptionSelect("Button")}
        >
          Button
        </li>
        <br />
        <br />
        <li
          className={`text-4xl ${selectedOption === "Radio" ? "text-green-500" : "text-neutral-900 dark:text-neutral-300"}  cursor-pointer`}
          onClick={() => handleOptionSelect("Radio")}
        >
          Radio
        </li>
        <br />
        <br />
        <li
          className={`text-4xl ${selectedOption === "Checkbox" ? "text-green-500" : "text-neutral-900 dark:text-neutral-300"} cursor-pointer`}
          onClick={() => handleOptionSelect("Checkbox")}
        >
          Checkbox
        </li>
        <br />
        <br />
        <li
          className={`text-4xl ${selectedOption === "Text" ? "text-green-500" : "text-neutral-900 dark:text-neutral-300"} cursor-pointer`}
          onClick={() => handleOptionSelect("Text") }
        >
          Text
        </li>
      </ul>
    </>
  );
};

export default InputSelect;