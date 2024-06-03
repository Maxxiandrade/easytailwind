import { useMyContext } from "../../inputReducer"


const InputRender = () => {
  const { state } = useMyContext();
  return (
    <div className="flex justify-center">
        <h1 className="text-4xl text-neutral-900 dark:text-neutral-300"> { state.input } </h1>
    </div>
  )
}

export default InputRender