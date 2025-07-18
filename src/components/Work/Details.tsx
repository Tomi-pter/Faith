export type Detail = {
  client: string;
  platform: string;
  screens: string;
  year?: number;
  duration?: string;
};

type Props = {
  projectDetails: Detail;
};

const Details: React.FC<Props> = ({ projectDetails }) => {
  return (
    <div className="flex px-5 md:px-14 py-5 justify-between flex-wrap gap-5">
      <div>
        <h2 className="font-semibold text-3xl md:text-5xl">Client:</h2>
        <p className="text-base md:text-2xl">{projectDetails.client}</p>
      </div>
      <div>
        <h2 className="font-semibold text-3xl md:text-5xl">Platform:</h2>
        <p className="text-base md:text-2xl">{projectDetails.platform}</p>
      </div>
      <div>
        <h2 className="font-semibold text-3xl md:text-5xl">Screens:</h2>
        <p className="text-base md:text-2xl">{projectDetails.screens}</p>
      </div>
      {projectDetails.year ? (
        <div>
          <h2 className="font-semibold text-3xl md:text-5xl">Year:</h2>
          <p className="text-base md:text-2xl">{projectDetails.year}</p>
        </div>
      ) : (
        <></>
      )}
      {projectDetails.duration ? (
        <div>
          <h2 className="font-semibold text-3xl md:text-5xl">Duration:</h2>
          <p className="text-base md:text-2xl">{projectDetails.duration}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Details;
