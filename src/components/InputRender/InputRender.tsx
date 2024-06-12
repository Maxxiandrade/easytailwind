import { useMyContext } from "../../buttonReducer";
import ButtonRender from "./ButtonRender";
import ImageRender from "./ImageRender";
import TextRender from "./TextRender";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";

const InputRender = () => {
  const { state } = useMyContext();
  const input = state.input;

  switch (input) {
    case "Button":
      return <ButtonRender />;
    case "Image":
      return <ImageRender />;
    case "Text":
      return <TextRender />;
    default:
      return (
        <>
          <div className="flex">
            <p className="text-4xl dark:text-neutral-300 ">
              Customize and preview your components with Easy Tailwind
            </p>
          </div>
          <br />
          <div className="flex max-w-7xl justify-around absolute bottom-20">
            <p className="text-3xl dark:text-neutral-300 ">About:</p>
            <a
              href="https://www.linkedin.com/in/maximiliano-andrade-8ab0b6213/"
              target="_blank"
            >
              <CiLinkedin className="size-10 cursor-pointer dark:text-neutral-300" />
            </a>
            <a href="https://github.com/Maxxiandrade" target="_blank">
              <IoLogoGithub className="size-10 cursor-pointer dark:text-neutral-300" />
            </a>
          </div>
        </>
      );
  }
};
export default InputRender;
