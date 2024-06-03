import { useState } from "react";
import InputCustomizer from "./InputCustomizer";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`bg-neutral-200 dark:bg-neutral-700 fixed bottom-0 w-full transition-all duration-300 ${open ? "h-56" : "h-20"} shadow-2xl dark:shadow-2xl inset-x-0 `}>
      <button
        onClick={() => setOpen(!open)}
        className="text-4xl absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 top-2"
      >
        <FaArrowUp className={`bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-300 rounded-full border-2 border-neutral-900 dark:border-neutral-300 ${open && "rotate-180"}`}/>
      </button>
      {open && <InputCustomizer />}
    </div>
  );
};

export default Footer;
