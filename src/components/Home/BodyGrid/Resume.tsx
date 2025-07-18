import joystick from "../../../assets/Joystick.svg";

const Resume = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1YWzeqT5aSAxY9JP596pLp3TT10v0qdR_/view?usp=drivesdk"
      className="bg-[#F5C9E0] col-span-3 p-9 text-left flex flex-col gap-4 bg-[url(/src/assets/resume_bg.png)] bg-no-repeat bg-center bg-size-[50%] md:bg-auto min-h-[350px] justify-between mx-8 md:m-0"
    >
      <div className="flex gap-4 items-center">
        <img src={joystick} alt="" />{" "}
        <p className="font-bold text-2xl">My Resume</p>{" "}
      </div>

      <p className="text-base md:max-w-3/4">
        This contains my work and learning experience, soft skills and hard
        skills
      </p>
    </a>
  );
};

export default Resume;
