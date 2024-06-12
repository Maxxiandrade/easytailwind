import { useState } from "react";
import { useMyContext } from "../../../../buttonReducer"

const ImageSize = () => {
  const {imageDispatch} = useMyContext()
  const [imgSize, setImgSize] = useState('96')
  const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImgSize(e.target.value);
    imageDispatch({type:'size', payload:e.target.value})
    console.log(e.target.value);
    
  };
  return (
    <>
    <label htmlFor="" className="text-xl dark:text-neutral-300">
    Size
        <br />
    <input type="range"  min="0"
              max="9" onChange={handleSize} value={imgSize}/>
    </label>
    </>
  )
}

export default ImageSize