import hero from "../../../assets/hadupad_hero.png";
import img2 from "../../../assets/hadupad_2.png";
import img3 from "../../../assets/hadupad_3.png";
import img4 from "../../../assets/hadupad_4.png";
import img5 from "../../../assets/hadupad_5.png";
import img6 from "../../../assets/hadupad_6.png";

import hadupadSpace1 from "../../../assets/hadupad_space_1.png";
import hadupadSpace2 from "../../../assets/hadupad_space_2.png";
import hadupadSpace3 from "../../../assets/hadupad_space_3.png";
import hadupadSpace4 from "../../../assets/hadupad_space_4.png";
import hadupadSpace5 from "../../../assets/hadupad_space_5.png";
import hadupadSpace6 from "../../../assets/hadupad_space_6.png";
import hadupadSpace7 from "../../../assets/hadupad_space_7.png";
import hadupadSpace8 from "../../../assets/hadupad_space_8.png";
import hadupadSpace9 from "../../../assets/hadupad_space_9.png";

import hadupadGrid1 from "../../../assets/hadupad_grid_1.png";
import hadupadGrid2 from "../../../assets/hadupad_grid_2.png";
import hadupadGrid3 from "../../../assets/hadupad_grid_3.png";
import hadupadGrid4 from "../../../assets/hadupad_grid_4.png";
import hadupadGrid5 from "../../../assets/hadupad_grid_5.png";
import hadupadGrid6 from "../../../assets/hadupad_grid_6.png";
import hadupadGrid7 from "../../../assets/hadupad_grid_7.png";
import hadupadGrid8 from "../../../assets/hadupad_grid_8.png";
import hadupadGrid9 from "../../../assets/hadupad_grid_9.png";

import hadupadRed1 from "../../../assets/hadupad_red_1.png";
import hadupadRed2 from "../../../assets/hadupad_red_2.png";
import hadupadRed3 from "../../../assets/hadupad_red_3.png";
import hadupadRed4 from "../../../assets/hadupad_red_4.png";
import hadupadRed5 from "../../../assets/hadupad_red_5.png";
import hadupadRed6 from "../../../assets/hadupad_red_6.png";
import hadupadRed7 from "../../../assets/hadupad_red_7.png";
import hadupadRed8 from "../../../assets/hadupad_red_8.png";
import hadupadRed9 from "../../../assets/hadupad_red_9.png";

import hadupadWhite1 from "../../../assets/hadupad_white_1.png";
import hadupadWhite2 from "../../../assets/hadupad_white_2.png";
import hadupadWhite3 from "../../../assets/hadupad_white_3.png";
import hadupadWhite4 from "../../../assets/hadupad_white_4.png";
import hadupadWhite5 from "../../../assets/hadupad_white_5.png";
import hadupadWhite6 from "../../../assets/hadupad_white_6.png";

import hadupadIG1 from "../../../assets/hadupad_IG_1.png";
import hadupadIG2 from "../../../assets/hadupad_IG_2.png";
import hadupadIG3 from "../../../assets/hadupad_IG_3.png";
import Nav from "../../../components/shared/Nav";

const Hadupad = () => {
  return (
    <div className="flex flex-col gap-6 items-center josefin-sans-regular w-full text-white px-5 md:px-0 py-7 bg-black">
      <Nav color="#000000" />

      <div className="w-full">
        <img src={hero} alt="" className="w-full" />
      </div>

      <div className="flex justify-between gap-2 md:gap-2.5 items-center w-full">
        <p>Brand strategy and Design</p>
        <p>Real Estate</p>
        <p>2025</p>
      </div>

      <div className="bg-[#242424] rounded-xl flex flex-col gap-4 px-5 py-8 md:px-11 text-left w-full">
        <h1 className="font-medium text-4xl">
          Connecting hosts and guests worldwide
        </h1>
        <p className="md:w-[45%]">
          Hadupad, A Nigerian real estate company, offers a curated selection of
          comfortable and convenient short-term rentals. Whether you're
          traveling for business or leisure, find your perfect home away from
          home with us."
        </p>
      </div>

      <div className="w-full">
        <img src={img2} alt="" className="w-full" />
      </div>

      <div className="bg-[#242424] rounded-xl flex flex-col gap-4 px-5 py-8 md:px-11 text-left w-full">
        <h1 className="font-medium text-4xl">
          Connecting hosts and guests worldwide
        </h1>
        <p className="md:w-[45%]">
          Experience the flexibility and comfort of short-term living with
          Hadupad. Our properties are designed to provide you with everything
          you need for a seamless and enjoyable stay.
        </p>
      </div>

      <div className="w-full flex flex-col xl:flex-row">
        <img
          src={img3}
          alt=""
          className="md:basis-1/2 rounded-tl-[10px] rounded-bl-[10px]"
        />
        <img
          src={img4}
          alt=""
          className="md:basis-1/2 rounded-tr-[10px] rounded-br-[10px] xl:ml-[-1.5px]"
        />
      </div>

      <div className="w-full flex flex-col xl:flex-row">
        <img
          src={img5}
          alt=""
          className="md:basis-1/2 rounded-tl-[10px] rounded-bl-[10px]"
        />
        <img
          src={img6}
          alt=""
          className="md:basis-1/2 rounded-tr-[10px] rounded-br-[10px] xl:ml-[-1.5px]"
        />
      </div>

      <div className="bg-[#242424] rounded-xl flex flex-col gap-4 px-5 py-8 md:px-11 text-left w-full">
        <h1 className="font-medium text-4xl">
          An identity that prioritizes your comfort
        </h1>
        <p className="md:w-[45%]">
          Hadupad’s identity features a clean& modern single line design with
          rounded corners and edges of the line create a friendly, approachable
          vibe conveying balance and stability. The use of orange is energetic,
          vibrant, and attention-grabbing, paired with Josefin Sans and Inter
          fonts.
        </p>
      </div>

      <div className="md:grid grid-cols-5 gap-8 justify-items-stretch items-stretch">
        <img src={hadupadSpace1} alt="" className="col-span-2" />
        <img src={hadupadSpace2} alt="" className="col-span-2" />
        <img src={hadupadSpace3} alt="" className="col-span-1" />
        <img src={hadupadSpace4} alt="" className="col-span-2" />
        <img src={hadupadSpace5} alt="" className="col-span-1" />
        <img src={hadupadSpace6} alt="" className="col-span-2" />
        <img src={hadupadSpace7} alt="" className="col-span-1" />
        <img src={hadupadSpace8} alt="" className="col-span-2" />
        <img src={hadupadSpace9} alt="" className="col-span-2" />
      </div>

      <div className="md:grid grid-cols-3 w-full justify-items-stretch items-stretch gap-0">
        <img src={hadupadGrid1} alt="" className="w-full" />
        <img src={hadupadGrid2} alt="" className="w-full ml-[-1px]" />
        <img src={hadupadGrid3} alt="" className="w-full ml-[-2px]" />
        <img src={hadupadGrid4} alt="" className="w-full mt-[-2px]" />
        <img src={hadupadGrid5} alt="" className="w-full ml-[-1px] mt-[-2px]" />
        <img src={hadupadGrid6} alt="" className="w-full ml-[-3px] mt-[-2px]" />
        <img src={hadupadGrid7} alt="" className="w-full mt-[-2px]" />
        <img src={hadupadGrid8} alt="" className="w-full ml-[-2px] mt-[-2px]" />
        <img
          src={hadupadGrid9}
          alt=""
          className="w-full ml-[-3.5px] mt-[-2px]"
        />
      </div>

      <div className="bg-[#242424] rounded-xl flex flex-col gap-4 px-5 py-8 md:px-11 text-left w-full">
        <h1 className="font-medium text-4xl">
          Find your sanctuary with Hadupad
        </h1>
        <p className="md:w-[45%]">
          Get in the mood, the feels, the vibes. Explore the city, go on
          adventures. Whether alone, with friends or family, Hadupad’s got you
          covered throughout your stay
        </p>
      </div>

      <div className="bg-[#DC4731] rounded-xl py-5 px-4 md:py-9 md:px-11 flex flex-col md:grid grid-cols-4 gap-5 w-full">
        <div className="flex flex-col gap-5">
          <img src={hadupadRed1} alt="" className="h-full" />
          <img src={hadupadRed2} alt="" className="h-full" />
        </div>
        <div className="flex flex-col gap-5">
          <img src={hadupadRed3} alt="" className="h-full" />
          <img src={hadupadRed4} alt="" className="h-full" />
        </div>
        <div className="flex flex-col self-stretch">
          <img src={hadupadRed5} alt="" className="h-full" />
          <img src={hadupadRed6} alt="" className="h-full mt-[-2.5px]" />
          <img src={hadupadRed7} alt="" className="h-full mt-[-2.5px]" />
        </div>
        <div className="flex flex-col gap-5">
          <img src={hadupadRed8} alt="" />
          <img src={hadupadRed9} alt="" className="h-full" />
        </div>
      </div>

      <div className="bg-white rounded-xl py-5 px-4 md:py-10 md:px-12 flex flex-col md:grid grid-cols-3 gap-5 w-full">
        <div className="flex flex-col gap-5">
          <img src={hadupadWhite1} alt="" className="w-full h-full" />
          <img src={hadupadWhite2} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-5">
          <img src={hadupadWhite3} alt="" className="w-full" />
          <img src={hadupadWhite4} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-5">
          <img src={hadupadWhite5} alt="" className="w-full h-full" />
          <img src={hadupadWhite6} alt="" className="w-full" />
        </div>
      </div>

      <div className="bg-[#FFEED8] rounded-xl py-5 px-4 md:py-10 md:px-12 flex flex-col md:flex-row flex-wrap gap-3 w-full justify-center">
        <img src={hadupadIG1} alt="" />
        <img src={hadupadIG2} alt="" />
        <img src={hadupadIG3} alt="" />
      </div>
    </div>
  );
};

export default Hadupad;
