import { handleSelection } from "../../../../utils/utils";

const DecorationControls = () => {
  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = (e.currentTarget as HTMLButtonElement).value;
    handleSelection(buttonValue);
  };

  return (
    <div>
      <div className="block space-y-5 ">
        <button
          className="hover:scale-105 transition duration-150 border border-black px-2 rounded-md h-10 dark:border-neutral-300 line-through text-xl dark:text-neutral-900 mt-3 bg-white"
          onClick={handleButton}
          value={"line-through"}
        >
          Line through
        </button>
        <br />

        <button
          className="hover:scale-105 transition duration-150 border border-black px-2 rounded-md h-10 dark:border-neutral-300 underline text-xl dark:text-neutral-900 bg-white"
          onClick={handleButton}
          value={"underline"}
        >
          Underline
        </button>
      </div>
    </div>
  );
};

export default DecorationControls;
