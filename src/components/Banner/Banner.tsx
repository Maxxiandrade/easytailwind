import tailwind from "/tailwind.png";
const Banner = () => {
  return (
    <div className=" flex justify-center">
      <h1 className="text-7xl dark:text-white flex mt-5">
        <span className="font-cursive">Easy</span>
        <span className="font-body ml-2">Tailwind</span>
        <img
          src={tailwind}
          alt="Tailwind Logo"
          className="h-9 w-16 ml-2 mt-5"
        />
      </h1>
    </div>
  );
};

export default Banner;
