import awenixLogo from "../../../assets/awenix.png";
import heroImg from "../../../assets/awenixHeroImg.png";
import user1 from "../../../assets/awenix_user_1.png";
import user2 from "../../../assets/awenix_user_2.png";
import hiFi from "../../../assets/awenix_hiFi.png";
import userJourney from "../../../assets/userJourney.png";

import awenixVid1 from "../../../assets/Awenix.mp4";
import awenixVid2 from "../../../assets/Awenix2.mp4";

import { type Detail } from "../../../components/Work/Details";
import Nav from "../../../components/shared/Nav";

const Awenix = () => {
  const projectDetails: Detail = {
    client: "Awenix Farms",
    platform: "Web App",
    screens: "50+",
    duration: "8 Weeks",
  };

  return (
    <>
      <Nav color="#ECF0F5" />
      <div className="px-5 md:px-7 py-10 flex flex-col gap-16 text-left">
        <div className="flex justify-center w-full">
          <img src={awenixLogo} alt="" />
        </div>
        <div className="hidden md:block">
          <video src={awenixVid1} width="100%" height="300" controls />
        </div>
        <div className="md:hidden">
          <video src={awenixVid2} width="100%" height="300" controls />
        </div>

        <div className="flex justify-between font-semibold text-sm md:text-2xl">
          <p>UX Design</p>
          <p>Poultry Feed</p>
          <p>Agriculture</p>
          <p>2024</p>
        </div>

        <div>
          <h1 className="font-semibold text-3xl md:text-5xl md:w-2/3 mb-5 leading-[150%]">
            Providing farmers and businesses with nutritious diet for their
            livestock
          </h1>
          <div className="flex flex-col md:flex-row gap-2.5">
            <div>
              <p className="text-xl md:text-2xl">
                Awenix is a leading local feed supplier in Nigeria that
                specializes in producing feed for poultry farmers. The feed are
                designed to support every stage of your birds' life cycle, from
                vibrant chicks to productive layers, ensuring optimal growth,
                performance, and overall well-being
              </p>
              <div className="md:w-1/3 py-5 flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <h2 className="font-semibold text-2xl">Client:</h2>
                  <p className="text-2xl">{projectDetails.client}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <h2 className="font-semibold text-2xl">Platform:</h2>
                  <p className="text-2xl">{projectDetails.platform}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <h2 className="font-semibold text-2xl">Screens:</h2>
                  <p className="text-2xl">{projectDetails.screens}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <h2 className="font-semibold text-2xl">Duration:</h2>
                  <p className="text-2xl">{projectDetails.duration}</p>
                </div>
              </div>
            </div>
            <img src={heroImg} alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">
            Problem statement
          </h3>
          <p className="text-xl md:text-2xl">
            Awenix Farms Ltd has established itself as a trusted feed brand for
            poultry farmers in Ibadan, Nigeria. At Awenix, customers primarily
            placed orders through phone calls or by visiting physical stores.
            While this approach served them well for many years, the company
            recognized the growing need for a convenient online ordering system.{" "}
            <br />
            Awenix prides itself in its specially curated feed mix.{" "}
            <b>
              But what if the client has the option to customize the feed
              content required for healthy growth of their livestock?
            </b>
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">Approach</h3>
          <p className="text-xl md:text-2xl">
            Every great product started with a question such as,{" "}
            <b>
              “what is the typical customer journey without our product in their
              life? What are the friction points? Finally, how could we measure
              the value of those needs for both the customer and the business?”
            </b>{" "}
            These questions frames my approach to the problem, helps to narrow
            my research work and identify the best techniques to progress.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">Solution</h3>
          <p className="text-xl md:text-2xl">
            Partnering with Awenix, I created a meaningful and seamless website
            and web app for easy access to local farmers and businesses with
            features such a re-ordering, real-time tracking and a special
            category for custom orders.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">
            The Process: User Research
          </h3>
          <div className="flex flex-col md:flex-row gap-y-2">
            <img src={user1} alt="" className="w-full md:w-1/2" />
            <img src={user2} alt="" className="md:w-1/2" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">
            User Journey [Fatima Abubakar]
          </h3>
          <img src={userJourney} alt="" />
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">
            High Fidelity Web App (Desktop + Mobile)
          </h3>
          <p className="text-xl md:text-2xl">
            Utilizing the wireframes, we developed high-fidelity designs for the
            website to offer a realistic representation of the final design,
            assisting stakeholders and developers in grasping the visual aspects
            and interactions. This approach also improved user testing,
            resulting in precise feedback and a refined, user-centric design.
          </p>
          <img src={hiFi} alt="" />
        </div>
      </div>
    </>
  );
};

export default Awenix;
