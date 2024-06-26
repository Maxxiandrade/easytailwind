import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import ButtonControls from "./Controls/ButtonColors/ButtonControls";
import { useMyContext } from "../../buttonReducer";
import TextControls from "./Controls/TextControls/TextControls";
import ImageControls from "./Controls/ImageControls/ImageControls";

const Footer = () => {
  const [open, setOpen] = useState(false);
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
      {open && state.input === "Image" && (
        <>
          <div className="flex justify-center mt-5">
            <h1 className="text-neutral-900 dark:text-neutral-300 text-4xl font-kanit">
              Image Controls
            </h1>
          </div>
          <ImageControls />
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
            Select a component from the sidebar
          </p>
        </div>
      )}
    </div>
  );
};

export default Footer;
