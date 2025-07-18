import { Link } from "react-router";
import cooking from "../../../assets/cooking.svg";

const Work = () => {
  return (
    <Link
      to="/work"
      className="bg-[#D3D4F2] col-span-2 p-9 text-left flex flex-col gap-4 bg-[url(/src/assets/work_bg.png)] bg-size-[50%] bg-center bg-no-repeat min-h-[350px] justify-between mx-8 md:m-0"
    >
      <div className="flex gap-4 items-center">
        <img src={cooking} alt="" /> <p className="font-bold text-2xl">Work</p>{" "}
      </div>

      <p className="text-base">
        Full-time and Freelance projects I’ve worked on in the span of 2yrs
      </p>
    </Link>
  );
};

export default Work;
