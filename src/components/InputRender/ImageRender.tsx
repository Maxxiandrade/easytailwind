
import { MdContentCopy } from "react-icons/md"
import picture from "../../../public/avatar.jpg"
import { useMyContext } from "../../buttonReducer"

const ImageRender = () => {
  const copyToClipboard = async()=>{
    try {
      await navigator.clipboard.writeText(`<img src={} alt="" className='${customClass}'/>`)
      alert('Copied!')
    } catch (error) {
      console.log(error);
      
    }
  }


  const {imageState} = useMyContext()

  const {duration, filter, hover, rounded, size} = imageState

  const customClass = `size-${size} ${filter} ${rounded} ${hover} ${duration}`
  return (
    <div  className="flex flex-col items-center justify-center">
    <img src={picture} alt=""  className={customClass}/>
    <br />
    <MdContentCopy onClick={copyToClipboard} className="dark:text-neutral-300 cursor-pointer"/>
    </div>
  )
}

export default ImageRender