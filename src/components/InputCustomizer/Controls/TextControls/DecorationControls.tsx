import { useState } from "react";
import { handleSelection } from '../../../../utils/utils';

const DecorationControls = () => {
  const [decorationEnabled, setDecorationEnabled] = useState(false);



  const handleEnabledCheckbox = () => {
    const newEnabledState = !decorationEnabled;
    setDecorationEnabled(newEnabledState);
    if (!newEnabledState) {
      handleSelection("none");
    }
  };

  const handleButton = (e:React.MouseEvent<HTMLButtonElement>)=>{
    const buttonValue = (e.currentTarget as HTMLButtonElement).value;
  handleSelection(buttonValue);
  }

  return (
    <div>
      <label htmlFor="decoration-checkbox" className="text-xl dark:text-neutral-300">
        <input
          type="checkbox"
          id="decoration-checkbox"
          className="size-7 mr-2"
          onChange={handleEnabledCheckbox}
          checked={decorationEnabled}
        />{" "}
        Decoration
      </label>
      {decorationEnabled && (
        <div className="block space-y-5 ">
          
          <button className="border border-black px-2 rounded-sm dark:border-neutral-300 line-through text-xl dark:text-neutral-300 mt-3 " onClick={handleButton} value={'line-through'}>Line through</button>
          <br />
          
          <button className="border border-black px-2 rounded-sm dark:border-neutral-300 underline text-xl dark:text-neutral-300" onClick={handleButton} value={'underline'}>Underline</button>
        </div>
      )}
    </div>
  );
};

export default DecorationControls;
