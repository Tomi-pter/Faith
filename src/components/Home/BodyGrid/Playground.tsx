import { Link } from "react-router";
import moon from "../../../assets/Full Moon Face.svg";

const Playground = () => {
  return (
    <Link
      to={"/playground"}
      className="bg-[#BDF4D4] col-span-2 p-9 text-left flex flex-col gap-4 bg-[url(/src/assets/playground_bg.png)] bg-no-repeat bg-center bg-size-[100%] min-h-[350px] justify-between mx-8 md:m-0"
    >
      <div className="flex gap-4 items-center">
        <img src={moon} alt="" />{" "}
        <p className="font-bold text-2xl">PlayGround</p>{" "}
      </div>

      <p className="text-base">Fun projects I’ve worked on as a designer</p>
    </Link>
  );
};

export default Playground;
