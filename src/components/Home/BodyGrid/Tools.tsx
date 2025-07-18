import figma from "../../../assets/figma.svg";
import photoshop from "../../../assets/photoshop.svg";
import miro from "../../../assets/miro.svg";
import illustrator from "../../../assets/illustrator.svg";
import webflow from "../../../assets/webflow.png";
import joystick from "../../../assets/Joystick.svg";

const Tools = () => {
  return (
    <div className="bg-[#F7F0E6] col-span-3 p-9 text-left flex flex-col gap-4 mx-8 md:m-0">
      <div className="flex gap-4 items-center">
        <img src={joystick} alt="" />{" "}
        <p className="font-bold text-2xl">Tools I Use</p>{" "}
      </div>
      <div className="flex gap-8 justify-center">
        <img src={figma} alt="" />
        <div className="grid grid-cols-2 gap-6 place-items-center self-center">
          <img src={photoshop} alt="" className="w-16 h-16" />
          <img src={illustrator} alt="" className="w-16 h-16" />
          <img src={miro} alt="" className="w-16 h-16 bg-white rounded" />
          <img src={webflow} alt="" className="w-16 h-16" />
        </div>
      </div>
      <p className="text-base max-w-2/3">
        These are the tools I'm familiar with and make use of in my day-to-day
      </p>
    </div>
  );
};

export default Tools;
