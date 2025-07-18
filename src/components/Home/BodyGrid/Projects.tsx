import { Link } from "react-router";
import nerdy from "../../../assets/Disguised Face.svg";

const Projects = () => {
  return (
    <Link
      to={"/live"}
      className="bg-[#FFE9C9] col-span-2 p-9 text-left flex flex-col gap-4 bg-[url(/src/assets/projects_bg.png)] bg-no-repeat bg-center bg-cover min-h-[350px] justify-between mx-8 md:m-0"
    >
      <div className="flex gap-4 items-center">
        <img src={nerdy} alt="" />{" "}
        <p className="font-bold text-2xl">Live Projects</p>{" "}
      </div>

      <p className="text-base">
        Live websites and mobile applications, designed by me
      </p>
    </Link>
  );
};

export default Projects;
