import heroDesktop from "../../../assets/pyramid (1).png";
import user1 from "../../../assets/UP1.png";
import user2 from "../../../assets/UP2.png";
import brandStyle from "../../../assets/brand style guide (1).png";
import hiFi from "../../../assets/high fi desk.png";
import pyramidMobile1 from "../../../assets/pyramidMobile1.png";
import pyramidMobile2 from "../../../assets/pyramidMobile2.png";
import userFlow from "../../../assets/user flow (1).png";

import Details, { type Detail } from "../../../components/Work/Details";
import Nav from "../../../components/shared/Nav";

const Pyramid = () => {
  const projectDetails: Detail = {
    client: "Pyramid Finance",
    platform: "Web App",
    screens: "50+",
    year: 2024,
  };

  return (
    <>
      <Nav color="#ECF0F5" />
      <div className="px-5 md:px-7 py-10 flex flex-col gap-16 text-left">
        <div className="hidden md:block">
          <img src={heroDesktop} alt="" />
        </div>
        <div className="md:hidden">
          <img src={pyramidMobile1} alt="" />
          <img src={pyramidMobile2} alt="" />
        </div>

        <Details projectDetails={projectDetails} />

        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-3xl md:text-5xl">Project Brief:</h2>
          <h3 className="font-semibold text-2xl md:text-3xl">Overview:</h3>
          <p className="text-xl md:text-2xl">
            Monolith is a platform exclusively for finance enthusiasts. Enabling
            connections, interaction, engaging and learning. On a mission to
            increase financial inclusion literacy and awareness by capturing
            value for enthusiasts.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">Goals:</h3>
          <ol className="list-decimal px-7 md:px-10 flex flex-col gap-5">
            <li className="text-xl md:text-2xl">
              <b>Foster a Thriving Community:</b> Build a platform that goes
              beyond basic connections. Create spaces for discussions, group
              projects, and even real-world meetups, fostering a sense of
              belonging and camaraderie among finance enthusiasts.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Democratize Financial Knowledge:</b> Make learning interactive
              and engaging. Offer educational resources like articles, webinars,
              and learning experiences to break down complex financial concepts
              into digestible formats.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Empower User-Generated Content:</b> Encourage enthusiasts to
              share their knowledge and experiences. Host discussions, Q&A
              sessions with experts, and even allow users to create educational
              content themselves, fostering a sense of ownership and expertise
              within the community.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Reward and Recognize Participation:</b> Develop a system that
              captures value for enthusiasts. This could involve badges, points,
              leader boards, or even the ability to monetize quality content
              creation. This incentives participation, promotes valuable
              contributions, and fosters a sense of achievement.
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">
            Target Audience
          </h3>
          <ol className="list-decimal px-7 md:px-10 flex flex-col gap-5">
            <li className="text-xl md:text-2xl">
              <b>Young Investors:</b> This group is interested in taking control
              of their finances and building wealth for the future. They might
              be new to investing and eager to learn the basics of stocks,
              bonds, and other financial instruments.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Active Traders:</b> This audience enjoys the thrill of the
              market and actively participates in trading activities. They might
              be day traders, swing traders, or long-term investors looking for
              advanced analysis tools, discussions on trading strategies, and
              real-time market updates.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Financial Professionals:</b> This group includes accountants,
              financial advisors, and other professionals working in the finance
              industry. They can benefit from the platform by staying up-to-date
              on the latest financial trends, connecting with peers for
              knowledge sharing, and potentially finding new clients or business
              opportunities.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Financially Curious:</b> This audience might not be actively
              investing yet, but they have a strong desire to learn more about
              personal finance and money management.
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">Key Features:</h3>
          <ul className="list-disc px-7 md:px-10 flex flex-col gap-5">
            <li className="text-xl md:text-2xl">
              <b>Block:</b> This is a community dedicated to a specific aspect
              of finance.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Chambers:</b> This is going to be a learning group which
              provides access to learning resources on various topics around
              finance.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Echo:</b> This is audio conversation, where you can join and
              listen to conversations on various finance based topics.
            </li>
            <li className="text-xl md:text-2xl">
              <b>News:</b> This is going to be trending news on finance.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Gallery:</b> Video Contents(Long and Short) relating to
              Finance.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Newsletter:</b> Set of regularly published articles on
              Monolith, typically about a specific topic on finance.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-2xl md:text-3xl">Team Structure</h3>
          <p className="text-xl md:text-2xl">
            I was responsible for the end-to-end redesign of the Monolith App
            including User Research, wire-framing, prototyping, visual design
            and user testing.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">User Flow</h3>
          <img src={userFlow} alt="" />
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">User Personas</h3>
          <p className="text-xl md:text-2xl">
            I created user personas for understanding the target audience's
            characteristics and goals, to create a website that resonates with
            users and caters to their specific requirements.
          </p>
          <div className="flex flex-col md:flex-row gap-y-2">
            <img src={user1} alt="" className="w-full md:w-1/2" />
            <img src={user2} alt="" className="md:w-1/2" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">
            Brand Style Guide
          </h3>
          <img src={brandStyle} alt="" />
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

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">
            Result & Outcome
          </h3>
          <p className="text-xl md:text-2xl">
            The stakeholders approved the design after a few changes, and
            extensive usability testing was performed to guarantee conformity to
            industry standards. The design was prototyped in Figma, giving the
            team a thorough understanding of the application's functionality.
            Iterative modifications and testing were carried out as development
            progressed using Agile methods to obtain an optimal minimal viable
            product (MVP). The link to the final prototype on Figma is provided
            below, demonstrating the culmination of our user-centered design
            process and agile development approach.
          </p>
        </div>
      </div>
    </>
  );
};

export default Pyramid;
