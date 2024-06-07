import { useMyContext } from "../../buttonReducer"
import ButtonRender from "./ButtonRender";
import TableRender from "./TableRender";
import TextRender from "./TextRender";

const InputRender = () => {
  const { state } = useMyContext();
  const input = state.input
 

  switch(input){
    case 'Button':
      return <ButtonRender/>
    case 'Table':
      return <TableRender/>
    case 'Checkbox':
      return (<p>Checkbox</p>)
    case 'Text':
      return(<TextRender/>)
    default:
      return (
        <div className="block  max-w-7xl">
          <h2 className="text-5xl justify-center items-center font-ubuntu text-center text-neutral-900 dark:text-neutral-300">Welcome to Easy Tailwind. A tool where you can create and customize components to your own style, saving time and ensuring consistency across your projects.</h2>
        <br />
        <br />
          <h3 className="text-4xl justify-center items-center font-ubuntu text-center text-neutral-900 dark:text-neutral-300">Start by selecting a component from the sidebar</h3>
        </div>
      )
  }
}
export default InputRender