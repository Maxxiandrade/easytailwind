import { useState } from "react";
import InputSelect from "./InputSelect";
import { FaArrowRight } from "react-icons/fa6";
import { GiStripedSun } from "react-icons/gi";

interface Props{
  darkMode: boolean;
  toggleDarkMode: ()=>void
}

const Sidebar:React.FC<Props> = ({toggleDarkMode, darkMode}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`bg-neutral-200 dark:bg-neutral-700 h-screen p-5 pt-8 transition-all duration-300 ${open ? "w-72" : "w-20"} relative shadow-right dark:shadow-innerCustom inset-x-0 inset-y-0`}>
      <button
        onClick={() => setOpen(!open)}
        className="text-4xl absolute -right-3 top-96 transform transition-transform duration-300"
      >
        <FaArrowRight className={`bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-300 rounded-full border-2 border-neutral-900 dark:border-neutral-300 ${open && "rotate-180"}`}/>
      </button>
      {open && <InputSelect />}
      {open &&
        <button
        className="absolute w-20 h-20 bottom-60 left-24 bg-neutral-900 dark:bg-neutral-300 rounded-full text-white dark:text-black font-semibold"
        onClick={toggleDarkMode}
        >
          
        {
        darkMode ? 
        <GiStripedSun className="size-14 ml-3"/>
        : 
        
        <GiStripedSun className="size-14 ml-3"/>

                  }
      </button>}
      
    </div>
  );
};

export default Sidebar;
