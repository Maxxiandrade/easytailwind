import { handleSelection } from "../../../../utils/utils";

const FontControls = () => {

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        handleSelection(e.target.value)
    }
  return (
    <div className="block">
    <label htmlFor="" className="mr-2 text-xl text-neutral-900 dark:text-neutral-300"> Font
    <br />
    <select
        name=""
        id=""
        onChange={handleChange}
        className="rounded-md h-10 border border-neutral-900 dark:border-neutral-300 dark:text-neutral-900"
        >
        <option value="font-sans" className="font-sans dark:text-neutral-900">
          Sans
        </option>
        <option value="font-serif" className="font-serif dark:text-neutral-900">
          Serif
        </option>
        <option value="font-mono" className="font-mono dark:text-neutral-900">
          Mono
        </option>
        <option value="font-body" className="font-body dark:text-neutral-900">
          Body
        </option>
        <option value="font-cursive" className="font-cursive dark:text-neutral-900">
          Cursive
        </option> 
        <option value="font-thin" className="font-thin dark:text-neutral-900">
          Thin
        </option>
        <option value="font-extralight" className="font-extralight dark:text-neutral-900">
          Extralight
        </option>
        <option value="font-light" className="font-light dark:text-neutral-900">
          Light
        </option>
        <option value="font-normal" className="font-normal dark:text-neutral-900">
          Normal
        </option>
        <option value="font-medium" className="font-medium dark:text-neutral-900">
          Medium
        </option>
        <option value="font-semibold" className="font-semibold dark:text-neutral-900">
          Semibold
        </option>
        <option value="font-bold" className="font-bold dark:text-neutral-900">
          Bold
        </option>
        <option value="font-extrabold" className="font-extrabold dark:text-neutral-900">
          Extrabold
        </option>
        <option value="font-black" className="font-black dark:text-neutral-900">
          Black
        </option>
      </select>
      </label>

          </div>
  )
}

export default FontControls