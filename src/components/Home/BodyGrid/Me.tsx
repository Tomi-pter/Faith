import ghost from "../../../assets/Ghost.svg";
import faith from "../../../assets/Faith.png";

const Me = () => {
  return (
    <div className="bg-[#BFE4FE] col-span-4 p-9 text-left relative min-h-[600px] md:min-h-[350px] z-10">
      <div className="flex gap-4 items-center mb-9">
        <img src={ghost} alt="" />{" "}
        <p className="font-bold text-2xl text-white">Fayy</p>{" "}
      </div>
      <h1 className="font-bold text-4xl md:text-5xl mb-3">
        <span className="block text-2xl">Hi, I’m</span>Faith Oyeniyi
      </h1>
      <p className="text-base md:max-w-[70%]">
        A user-experience, user-interface designer and Ux writer that is highly
        adept at working independently and collaborating in a team to build
        accessible, responsive and competent designs
      </p>
      <div className="absolute right-0 bottom-0">
        <img src={faith} alt="" />
      </div>
    </div>
  );
};

export default Me;
