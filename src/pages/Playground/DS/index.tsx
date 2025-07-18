// import ds from "../../../assets/DS (1).png";
import dsLogo from "../../../assets/ds_logo.png";
import dsHero from "../../../assets/ds_hero.png";
import dsBg from "../../../assets/ds_bg.png";
import dsGoogle from "../../../assets/ds_google.png";
import dsApple from "../../../assets/ds_apple.png";

import dsBody1 from "../../../assets/ds_body_1.png";
import dsBody2 from "../../../assets/ds_body_2.png";
import dsBody3 from "../../../assets/ds_body_3.png";
import dsBody4 from "../../../assets/ds_body_4.png";
import dsBody5 from "../../../assets/ds_body_5.png";

import dsSow from "../../../assets/ds_sow.png";

import Nav from "../../../components/shared/Nav";

const DS = () => {
  return (
    <>
      <div className="text-white bg-[#061833]">
        <Nav color="#061833" />

        <div className="p-5 md:p-0 flex flex-col gap-20">
          <div className="flex justify-between items-center">
            <img src={dsLogo} alt="" className="w-1/2 md:w-auto" />
            <button className="bg-[#508A72] font-extrabold text-lg md:text-3xl rounded-[50px] px-4 py-3 md:py-5">
              Download
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-5">
            <div className="flex flex-col md:text-left gap-5 md:w-3/5">
              <h1 className="font-extrabold text-4xl md:text-6xl">
                Travel Right With DS
              </h1>
              <p>
                Dedicated to it’s customers and staffs around the world, DS
                provides your all in one essentials. Travelling light or heavy,
                you’ll be sure to get the best and most comfortable services
                when you travel with us
              </p>
              <div className="flex gap-2.5 mt-10 justify-center md:justify-start">
                <img src={dsGoogle} alt="" className="w-2/5 md:w-auto" />
                <img src={dsApple} alt="" className="w-2/5 md:w-auto" />
              </div>
            </div>
            <div
              className="md:w-2/5 flex justify-center"
              style={{
                backgroundImage: `url(${dsBg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundSize: "contain",
              }}
            >
              <img src={dsHero} alt="" className="w-1/2 md:w-auto md:h-full" />
            </div>
          </div>

          <div className="text-left">
            <p>Project: Mobile Application</p>
            <p>Role: Product Design</p>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="md:text-left font-extrabold text-3xl md:text-5xl">
              DS TRIPS
            </h2>
            <div className="md:text-right md:self-end md:w-2/5 md:flex gap-2">
              <label className="font-medium md:text-xl md:w-full">
                About the project:{" "}
              </label>
              <p className="font-medium md:text-2xl">
                Booking a flight has never been easier. This application makes
                travel simple, whether on a business trip, vacation or event.
              </p>
            </div>
            <div className="bg-[#5E9B97] rounded-4xl md:rounded-[50px] p-5 md:p-14 flex flex-col gap-8 justify-center items-center">
              <img src={dsSow} alt="" />
            </div>
          </div>

          <img src={dsBody1} alt="" />
          <img src={dsBody2} alt="" />
          <img src={dsBody3} alt="" />
          <img src={dsBody4} alt="" />
          <img src={dsBody5} alt="" />
        </div>
      </div>
    </>
  );
};

export default DS;
