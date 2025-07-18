import smiley from "../../../assets/smiley.svg";
import insta from "../../../assets/insta.png";
import twitter from "../../../assets/twitter (1).png";
import linkedin from "../../../assets/linkedin.svg";
import pin from "../../../assets/pin.svg";

const Socials = () => {
  return (
    <div className="bg-[#FDCDC1] col-span-2 p-9 text-left flex flex-col gap-4 m-8 md:m-0">
      <div className="flex gap-4 items-center">
        <img src={smiley} alt="" />{" "}
        <p className="font-bold text-2xl">Socials</p>{" "}
      </div>
      <div className="grid grid-cols-2 gap-6 place-items-center w-2/3 self-center">
        <a
          href="https://www.instagram.com/thenamejd?igsh=MXZ5czFuM2l1bWF1aQ%3D%3D&utm_source=qr"
          target="_blank"
        >
          <img src={insta} alt="" className="w-16 h-16" />
        </a>
        <a href="https://x.com/thenamejd?s=21" target="_blank">
          <img src={twitter} alt="" className="w-16 h-16" />
        </a>
        <a
          href="https://linkedin.com/in/faith-oyeniyi-18aa07b8"
          target="_blank"
        >
          <img src={linkedin} alt="" className="w-16 h-16 bg-white rounded" />
        </a>
        <a href="https://pin.it/16wVSDg4c" target="_blank">
          <img src={pin} alt="" className="w-16 h-16" />
        </a>
      </div>
      <p className="text-base">
        Get to know me, my interests, hobbies, lifestyle and communities
      </p>
    </div>
  );
};

export default Socials;
