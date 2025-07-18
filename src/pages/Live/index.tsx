import seraphina from "../../assets/seraphina.png";
import hadupad from "../../assets/hadupad_live.png";
import medicare from "../../assets/medicare.png";

import ProjectGrid, {
  type GridDetails,
} from "../../components/shared/Project Grid";
import Nav from "../../components/shared/Nav";

const Live = () => {
  const workArray: Array<GridDetails> = [
    {
      description: "Forward-thinking software consulting agency",
      img: seraphina,
      title: "Seraphina systems",
      url: "https://seraphina-systems.com/",
      live: true,
    },
    {
      description: "Seamless property rental company",
      img: hadupad,
      title: "Hadupad",
      url: "https://hadupad.vercel.app/",
      live: true,
    },
    {
      description: "A robust medical directory app",
      img: medicare,
      title: "Medicare",
      url: "https://www.figma.com/proto/keVnkaE0asoiT44LCY5UJj/Medicare?node-id=285-3661&t=gDOiVcYJPKpXO1mw-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A216",
      live: true,
    },
  ];

  return (
    <>
      <Nav color="#ffffff" />
      <h1 className="font-semibold text-3xl md:text-4xl mb-10 md:mb-20">
        Live Projects
      </h1>
      <ProjectGrid workArray={workArray} />
    </>
  );
};

export default Live;
