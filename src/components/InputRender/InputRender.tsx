import { useMyContext } from "../../inputReducer"
import { MdContentCopy } from "react-icons/md";

const InputRender = () => {
  const { state } = useMyContext();
  const {textColor, backgroundColor, rounded, border, borderColor, w, h, hover, duration, textIntensity, backgroundIntensity, borderIntensity, hoverBg , hoverText, hoverTextIntensity,hoverBgIntensity} = state

  const customClass = `<button className=" ${textColor}${textIntensity} ${backgroundColor}${backgroundIntensity} ${w} ${h} ${rounded} ${border} ${border}${borderColor}${borderIntensity} ${hoverText}${hoverTextIntensity} ${hoverBg}${hoverBgIntensity} ${hover} ${duration} ">Button</button>`
 
  const copyContent = async()=>{
    try {
      await navigator.clipboard.writeText(customClass)
      alert('Copied!')
    } catch (error) {
      console.log(error);
      
    }
  }

 

  if(state.input === "Button") {
    return (
      <>
      
      <div className="flex justify-center items-center">
      <button className={`${customClass} `} onClick={()=>{console.log(state);
      }}>Button</button>
      </div>
      <br />
      <div className="absolute mt-72 justify-center">
      
      <h2 className=" max-w-5xl justify-center font-mono text-xl text-neutral-900 dark:text-neutral-300">{`${customClass}`}</h2>
      <div className=" flex justify-end cursor-pointer text-neutral-900 dark:text-neutral-300 ">
      <MdContentCopy onClick={()=>copyContent()} />
        </div> 
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
      <h1 className="text-4xl text-neutral-900 dark:text-neutral-300">Welcome!</h1>
    )
  }
}

export default InputRender