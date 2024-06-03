import { useState } from "react";
import InputSelect from "./InputSelect";
import { FaArrowRight } from "react-icons/fa6";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`bg-neutral-200 dark:bg-neutral-700 h-screen p-5 pt-8 transition-all duration-300 ${open ? "w-72" : "w-20"} relative shadow-2xlxl inset-x-0 inset-y-0`}>
      <button
        onClick={() => setOpen(!open)}
        className="text-4xl absolute -right-3 top-96 transform transition-transform duration-300"
      >
        <FaArrowRight className={`bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-300 rounded-full border-2 border-neutral-900 dark:border-neutral-300 ${open && "rotate-180"}`}/>
      </button>
      {open && <InputSelect />}
    </div>
  );
};

export default Sidebar;
