import { useMyContext } from "../../inputReducer"


const InputRender = () => {
  const { state } = useMyContext();
  const {textColor, backgroundColor, rounded, border, borderColor, w, h, hover, duration, textIntensity, backgroundIntensity, borderIntensity, hoverBg , hoverText} = state

  const customClass = `${border} ${border}${borderColor}${borderIntensity} ${duration} ${w} ${h} ${hover} ${rounded} ${textColor}${textIntensity} ${backgroundColor}${backgroundIntensity} ${hoverBg} ${hoverText}`
  console.log(customClass);
  
  if(state.input === "Button") {
    return (
      <>
      <div className="flex justify-center items-center">
      <button className={`${customClass} `} onClick={()=>{console.log(state);
      }}>Button</button>
      </div>
      <br />
      <div className="absolute mt-72 justify-normal">
      <h1 className=" font-mono text-xl text-neutral-900 dark:text-neutral-300">{`<button className="${customClass}">Button</button>`}</h1>
      </div>
      </>
      
    );
  }
  if( state.input === "Radio" ){
    return(
      <input type="radio" />
    )
  }
  if( state.input === "Checkbox" ){
    return(
      <input type="checkbox" className="size-36 checked:bg-teal-600"/>
    )
  }
  if( state.input === "Text" ){
    return(
      <input type="text" name="" id="" />
    )
  }
  else{
    return(
      <h1 className="text-4xl text-neutral-900 dark:text-neutral-300">Select an input</h1>
    )
  }
}

export default InputRender