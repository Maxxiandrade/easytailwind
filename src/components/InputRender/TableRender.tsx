import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const TableRender = () => {
  return (
    <table className="border-separate border border-neutral-900 dark:border-neutral-300 max-w-lg text-neutral-900 dark:text-neutral-300 ">
  <thead>
    <tr>
      <th className="border  border-neutral-900 dark:border-neutral-300">Head 1</th>
      <th className="border  border-neutral-900 dark:border-neutral-300">Head 2 <FaMinus className="border rounded-full mt-2 ml-1 border-neutral-900 dark:border-neutral-300 cursor-pointer"/></th>
      <FaPlus className="border rounded-full mt-2 ml-1 border-neutral-900 dark:border-neutral-300 cursor-pointer"/>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-neutral-900 dark:border-neutral-300">Body 1-1 </td>
      <FaPlus className="border rounded-full mt-2 ml-1 border-neutral-900 dark:border-neutral-300 cursor-pointer"/>
    </tr>
    <tr>
      <td className="border border-neutral-900 dark:border-neutral-300">Body 2-1</td>
      <td className="border border-neutral-900 dark:border-neutral-300">Body 2-2</td>
      <FaPlus className="border rounded-full mt-2 ml-1 border-neutral-900 dark:border-neutral-300 cursor-pointer"/>
    </tr>
    <tr>
      <td className="border border-neutral-900 dark:border-neutral-300">Body 3-1</td>
      <td className="border border-neutral-900 dark:border-neutral-300">Body 3-2</td>
      <td className="border border-neutral-900 dark:border-neutral-300">Body 3-3</td>
      <FaPlus className="border rounded-full mt-2 ml-1 border-neutral-900 dark:border-neutral-300 cursor-pointer"/>
    </tr>
  </tbody>
</table>
  )
}

export default TableRender