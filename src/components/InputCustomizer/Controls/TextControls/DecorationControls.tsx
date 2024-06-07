import { useState } from "react";
import {handleSelection} from '../../../../utils/utils'

const DecorationControls = () => {
    const [decoration, setDecoration] = useState<string | null>(null);
    const [decorationEnabled, setDecorationEnabled] = useState(false);
  
  
    const handleDecorationCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (decoration === e.target.value) {
        handleSelection(decoration)
        setDecoration(null);
      } else {
        handleSelection(e.target.value)
        setDecoration(e.target.value);
      }
    };
    const handleEnabledCheckbox = () => {
        setDecorationEnabled(!decorationEnabled); // Cambiar el estado del checkbox
        if (!decorationEnabled) {
          setDecoration("underline"); // Establecer decoration solo si se marca el checkbox
          handleSelection('underline')
        } else {
          setDecoration(null); // Establecer null si se desmarca el checkbox
          handleSelection('')
        }
      };
 
    
  return (
    <div>
        <label
          htmlFor="decoration-checkbox"
          className="text-xl dark:text-neutral-300"
        >
          <input
            type="checkbox"
            id="decoration-checkbox"
            className="size-7 mr-2 "
            onChange={handleEnabledCheckbox}
            checked={decorationEnabled}
          />{" "}
          Decoration
        </label>
        {decorationEnabled && (
          <div className="block space-y-5">
            <label
              htmlFor="line-through"
              className="line-through text-xl dark:text-neutral-300 cursor-pointer"
            >
              <input
                type="checkbox"
                id="line-through"
                className="size-7 mr-2"
                onChange={handleDecorationCheckbox}
                checked={decoration === "line-trough"}
                value='line-through'
              />{" "}
              Line trough
            </label>
            <br />
            <label
              htmlFor="underline"
              className="underline text-xl dark:text-neutral-300 cursor-pointer"
            >
              <input
                type="checkbox"
                id="underline"
                className="size-7 mr-2"
                onChange={handleDecorationCheckbox}
                checked={decoration === "underline"}
                value='underline'
              />{" "}
              Underline
            </label>
          </div>
        )}
        <button onClick={()=>{
            console.log(decoration);
            
        }}>LOGG</button>
      </div>
  )
}

export default DecorationControls