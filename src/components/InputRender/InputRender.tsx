import { useMyContext } from "../../inputReducer"


const InputRender = () => {
  const { state } = useMyContext();
  const {textColor, backgroundColor, rounded, border, borderColor, w, h, hover, scale, duration} = state
  let {textIntensity, backgroundIntensity, borderIntensity} = state
  if(!textIntensity){
    textIntensity = '500'
  }
  if(!backgroundIntensity){
    backgroundIntensity = '500'
  }
  if(!borderIntensity){
    borderIntensity = '500'
  }
  const customClass = `${border} ${border}-${borderColor}-${borderIntensity} ${duration} w-${w} h-${h} ${hover}${scale}  rounded-${rounded} text-${textColor}-${textIntensity} bg-${backgroundColor}-${backgroundIntensity}`
  console.log(customClass);
  
  if(state.input === "Button") {
    return (
      
      <button className={`${customClass} `} onClick={()=>{console.log(state);
      }}>{textColor}</button>
      
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