import { Link } from "react-router";

export type GridDetails = {
  img: string;
  title: string;
  description: string;
  url: string;
  inProgress?: boolean;
  live?: boolean;
  bgColor?: string;
  bgImg?: boolean;
};

type Props = {
  workArray: Array<GridDetails>;
};

const ProjectGrid: React.FC<Props> = ({ workArray }) => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 gap-16 place-items-center p-5 md:p-0">
      {workArray.map(
        (
          { url, img, title, description, live, bgColor, inProgress, bgImg },
          index
        ) => (
          <Link
            to={url}
            key={index}
            target={`${live ? "_blank" : ""}`}
            className="flex flex-col gap-8 md:w-auto place-self-center w-full h-full"
          >
            <div
              className="rounded-2xl md:rounded-3xl flex justify-center items-center md:w-[500px] md:h-[378px]"
              style={{
                backgroundColor: bgColor,
                backgroundImage: bgImg
                  ? `url('src/assets/hadupad_play_bg.svg'), url('src/assets/hadupad_play_bg2.png')`
                  : "",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left, bottom right",
              }}
            >
              <picture
                style={{
                  width: inProgress ? "100%" : "",
                  padding: inProgress ? "" : "8px",
                }}
              >
                <source media="(min-width: 1024px)" srcSet={img} />
                <img src={img} style={{ width: inProgress ? "100%" : "" }} />
              </picture>
            </div>
            <div className="text-wrap">
              <h2 className="font-semibold text-2xl md:text-3xl text-left">
                {title}
              </h2>
              <p className="text-base md:text-xl text-left text-wrap">
                {description}
              </p>
            </div>
          </Link>
        )
      )}
    </section>
  );
};

export default ProjectGrid;
