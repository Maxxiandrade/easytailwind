import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import ButtonControls from "./Controls/ButtonControls";
import { useMyContext } from "../../inputReducer";
import TextControls from "./Controls/TextControls";
import CheckboxControls from "./Controls/CheckboxControls";
import RadioControls from "./Controls/RadioControls";

const Footer = () => {
  const [open, setOpen] = useState(true);
  const { state } = useMyContext();

  return (
    <div
      className={`bg-neutral-200 dark:bg-neutral-700 fixed bottom-0 w-full transition-all duration-300 ${
        open ? "h-56" : "h-20"
      } shadow-2xl dark:shadow-2xl inset-x-0 `}
    >
      <button
        onClick={() => setOpen(!open)}
        className="text-4xl absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 top-2"
      >
        <FaArrowUp
          className={`bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-300 rounded-full border-2 border-neutral-900 dark:border-neutral-300 ${
            open && "rotate-180"
          }`}
        />
      </button>

      {open && state.input === "Button" && (
        <>
          <div className="flex justify-center mt-5">
            <h1 className="text-neutral-900 dark:text-neutral-300 text-4xl font-kanit">
              Button Controls
            </h1>
          </div>
          <ButtonControls />
        </>
      )}
      {open && state.input === "Radio" && (
        <>
          <div className="flex justify-center mt-5">
            <h1 className="text-neutral-900 dark:text-neutral-300 text-4xl font-kanit">
              Radio Controls
            </h1>
          </div>
          <RadioControls />
        </>
      )}
      {open && state.input === "Checkbox" && (
        <>
          <div className="flex justify-center mt-5">
            <h1 className="text-neutral-900 dark:text-neutral-300 text-4xl font-kanit">
              Checkbox Controls
            </h1>
          </div>
          <CheckboxControls />
        </>
      )}
      {open && state.input === "Text" && (
        <>
          <div className="flex justify-center mt-5">
            <h1 className="text-neutral-900 dark:text-neutral-300 text-4xl font-kanit">
              Text Controls
            </h1>
          </div>
          <TextControls />
        </>
      )}
      {open && !state.input && (
        <div className="flex justify-center">
          <p className="text-4xl font-kanit mt-16 dark:text-neutral-300">
            Select an input from the sidebar
          </p>
        </div>
      )}
    </div>
  );
};

export default Footer;
