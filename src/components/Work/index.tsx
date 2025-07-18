import type { GridDetails } from "../shared/Project Grid";
import ProjectGrid from "../shared/Project Grid";
import dtc from "../../assets/dtc.png";
import artefix from "../../assets/artefix.png";
import monolith from "../../assets/monolith.png";
import laraad from "../../assets/laraad.png";
import awenix from "../../assets/awenix_thumbnail.svg";
import Nav from "../shared/Nav";

const Work = () => {
  const workArray: Array<GridDetails> = [
    {
      url: "",
      title: "Artefix",
      description: "Connects customers with skilled artisans",
      img: artefix,
    },
    {
      url: "",
      title: "Delivery Transport Connect",
      description: "Logistics platform for seamless shipping solutions",
      img: dtc,
    },
    {
      url: "",
      title: "Pyramid",
      description: "An exclusive platform for Finance Enthusiasts",
      img: monolith,
    },
    {
      url: "",
      title: "Awenix",
      description: "Providing farmers with nutritious diet for livestock",
      img: awenix,
    },
    {
      url: "",
      title: "LARAAD",
      description:
        "A seamless utility bill payment app with little to no charges",
      img: laraad,
      inProgress: true,
    },
  ];
  return (
    <>
      <Nav color="#ffffff" />
      <h1 className="text-center text-3xl md:text-4xl my-16 font-semibold">
        My Work
      </h1>
      <ProjectGrid workArray={workArray} />
    </>
  );
};

export default Work;
