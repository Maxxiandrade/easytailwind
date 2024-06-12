import { useMyContext } from "../../../../buttonReducer";

const ImageFilters = () => {
  const { imageDispatch } = useMyContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    imageDispatch({ type: "filter", payload: e.target.value });
  };
  return (
    <>
      <label htmlFor="" className="text-xl dark:text-neutral-300">
        Filter
        <br />
        <select
          name=""
          id=""
          className="rounded-md h-10 border border-neutral-900 dark:border-neutral-300 dark:text-neutral-900"
          onChange={handleChange}
        >
          <option value="none">-</option>
          <option value="Blur">Blur</option>
          <option value="Gray Scale">Gray Scale</option>
          <option value="Invert">Invert</option>
          <option value="Sepia">Sepia</option>
        </select>
      </label>
    </>
  );
};

export default ImageFilters;
