import { useMyContext } from "../../buttonReducer"
import { MdContentCopy } from "react-icons/md";

const ButtonRender = () => {
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

    
  return (
   <>
    <div className="flex justify-center items-center">
    <button className={`${customClass} `} onClick={()=>{console.log(state);
    }}>Button</button>
    </div>
    <br />
    <div className="absolute mt-72 justify-center ">
    
    <h2 className=" max-w-5xl justify-center font-mono text-xl text-neutral-900 dark:text-neutral-300">{`${customClass}`}</h2>
    <div className=" flex justify-end cursor-pointer text-neutral-900 dark:text-neutral-300 ">
    <MdContentCopy onClick={()=>copyContent()} />
      </div> 
    </div>
    </>
    
  )
}

export default ButtonRender