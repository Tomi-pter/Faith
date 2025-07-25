import Me from "./BodyGrid/Me";
import Playground from "./BodyGrid/Playground";
import Projects from "./BodyGrid/Projects";
import Socials from "./BodyGrid/Socials";
import Work from "./BodyGrid/Work";
import Tools from "./BodyGrid/Tools";
import Resume from "./BodyGrid/Resume";
import Contact from "./BodyGrid/Contact";

const BodyGrid = () => {
  return (
    <section className="flex flex-col w-full md:grid md:grid-cols-6 md:mt-10 gap-x-5 gap-y-6">
      <Me />
      <Socials />
      <Projects />
      <Work />
      <Playground />
      <Tools />
      <Resume />
      <Contact />
    </section>
  );
};

export default BodyGrid;
