import { AlignControls } from "./AlignControls";
import DecorationControls from "./DecorationControls";
import FontControls from "./FontControls";
import BgColorControl from "./BgColorControl";
import TextColorControl from "./TextColorControl";

const TextControls = () => {
  return (
    <div className="flex justify-around mt-3">
      <AlignControls />
      <DecorationControls />
      <FontControls />
      <TextColorControl />
      <BgColorControl />
    </div>
  );
};

export default TextControls;
