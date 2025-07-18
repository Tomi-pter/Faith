import hadupad from "../../assets/hadupad_playground.png";
import ds from "../../assets/ds_playground.png";

import ProjectGrid, {
  type GridDetails,
} from "../../components/shared/Project Grid";
import Nav from "../../components/shared/Nav";

const Playground = () => {
  const workArray: Array<GridDetails> = [
    {
      description: "Cozy comforts, Big adventures",
      img: hadupad,
      title: "Hadupad Brand Design",
      url: "/playground/hadupad",
    },
    {
      description: "Travelling light or heavy, DS Trips is here for you",
      img: ds,
      title: "DS Trips",
      url: "/playground/ds",
    },
  ];

  return (
    <>
      <Nav color="#ffffff" />
      <h1 className="font-semibold text-3xl md:text-4xl mb-10 md:mb-20">
        Playground
      </h1>
      <ProjectGrid workArray={workArray} />
    </>
  );
};

export default Playground;
