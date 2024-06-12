import ImageFilters from "./ImageFilters";
import ImageHover from "./ImageHover";
import ImageSize from "./ImageSize";
import RoundedControls from "./RoundedControls";

const ImageControls = () => {
  return (
    <div className="flex justify-around mt-3">
      <RoundedControls />
      <ImageFilters />
      <ImageHover />
      <ImageSize />
    </div>
  );
};

export default ImageControls;
