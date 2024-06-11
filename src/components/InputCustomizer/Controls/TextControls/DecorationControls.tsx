import { useState } from "react";
import { handleSelection } from '../../../../utils/utils';

const DecorationControls = () => {
  const [decoration, setDecoration] = useState<string | null>(null);
  const [decorationEnabled, setDecorationEnabled] = useState(false);

  const handleDecorationCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDecoration = e.target.value;
    if (decoration === selectedDecoration) {
      handleSelection("none");
      setDecoration(null);
    } else {
      handleSelection(selectedDecoration);
      setDecoration(selectedDecoration);
    }
  };

  const handleEnabledCheckbox = () => {
    const newEnabledState = !decorationEnabled;
    setDecorationEnabled(newEnabledState);
    if (!newEnabledState) {
      setDecoration(null);
      handleSelection("none");
    }
  };

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
        <div className="block space-y-5">
          <label htmlFor="line-through" className="line-through text-xl dark:text-neutral-300 cursor-pointer">
            <input
              type="checkbox"
              id="line-through"
              className="size-7 mr-2"
              onChange={handleDecorationCheckbox}
              checked={decoration === "line-through"}
              value="line-through"
            />{" "}
            Line through
          </label>
          <br />
          <label htmlFor="underline" className="underline text-xl dark:text-neutral-300 cursor-pointer">
            <input
              type="checkbox"
              id="underline"
              className="size-7 mr-2"
              onChange={handleDecorationCheckbox}
              checked={decoration === "underline"}
              value="underline"
            />{" "}
            Underline
          </label>
        </div>
      )}
    </div>
  );
};

export default DecorationControls;
