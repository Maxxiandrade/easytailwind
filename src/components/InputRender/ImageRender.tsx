
import picture from "../../../public/avatar.jpg"
import { useMyContext } from "../../buttonReducer"

const ImageRender = () => {
  const {imageState} = useMyContext()

  const {duration, filter, hover, rounded, size} = imageState

  const customClass = `size-${size} ${filter} ${rounded} ${hover} ${duration}`
  return (
    <>

    <img src={picture} alt=""  className={customClass}/>
    </>
  )
}

export default ImageRender