import { Link } from "react-router";

export type GridDetails = {
  img: string;
  title: string;
  description: string;
  url: string;
  inProgress?: boolean;
  live?: boolean;
};

type Props = {
  workArray: Array<GridDetails>;
};

const ProjectGrid: React.FC<Props> = ({ workArray }) => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 gap-16 place-items-center p-5 md:p-0">
      {workArray.map(({ url, img, title, description, live }, index) => (
        <Link
          to={url}
          key={index}
          target={`${live ? "_blank" : ""}`}
          className="flex flex-col gap-8 md:w-auto xl:w-[500px] lg:self-baseline place-self-center"
        >
          <img src={img} alt=" " className=" md:w-auto rounded" />
          <div className="text-wrap">
            <h2 className="font-semibold text-2xl md:text-3xl text-left">
              {title}
            </h2>
            <p className="text-base md:text-xl text-left text-wrap">
              {description}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProjectGrid;
