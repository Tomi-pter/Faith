import heroDesktop from "../../../assets/artefix-hero.png";
import double from "../../../assets/double (1).png";
import user1 from "../../../assets/user persona 1.png";
import user2 from "../../../assets/user persona 2.png";
import problem from "../../../assets/problem.png";
import developing from "../../../assets/developing.png";
import delivery from "../../../assets/delivery.png";
import heroMobile1 from "../../../assets/artefix_mobile1.png";
import heroMobile2 from "../../../assets/artefix_mobile2.png";

import Details, { type Detail } from "../../../components/Work/Details";
import Nav from "../../../components/shared/Nav";

const Artefix = () => {
  const projectDetails: Detail = {
    client: "Artefix",
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
          <img src={heroMobile2} alt="" />
          <img src={heroMobile1} alt="" />
        </div>

        <Details projectDetails={projectDetails} />

        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-3xl md:text-5xl">Project Brief:</h2>
          <h3 className="font-semibold text-2xl md:text-3xl">Overview:</h3>
          <p className="text-xl md:text-2xl">
            Artefix is an online platform that connects customers with skilled
            artisans to provide swift, reliable and quality services.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">Goals:</h3>
          <ol className="list-decimal px-7 md:px-10 flex flex-col gap-5">
            <li className="text-xl md:text-2xl">
              <b>Promote local artisans:</b> Support and promote the work of
              skilled artisans in the community, region and nation at large.
            </li>
            <li className="text-xl md:text-2xl">
              <b>To provide a swift, reliable, and high-quality service:</b>{" "}
              This would involve ensuring a smooth user experience for both
              customers and artisans, with efficient booking processes, clear
              communication, and a focus on quality craftsmanship.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Leading online artisan platform:</b> Become the leading online
              platform for connecting customers with skilled artisans
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">
            Target Audience
          </h3>
          <p className="text-xl md:text-2xl">
            The platform caters to two primary target audience; Service
            providers (Artisans) and customers in need of various services more
            residing in every state in Nigeria
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-2xl md:text-3xl">Team Structure</h3>
          <img src="" alt="" />
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">The Challenge</h3>
          <ol className="list-decimal px-7 md:px-10 flex flex-col gap-5">
            <li className="text-xl md:text-2xl">
              <b>Difficulty Finding Artisans with required Quality:</b> Build a
              platform that goes beyond basic connections. Create spaces for
              discussions, group projects, and even real-world meetups,
              fostering a sense of belonging and camaraderie among finance
              enthusiasts.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Lack of Trust:</b> Make learning interactive and engaging.
              Offer educational resources like articles, webinars, and learning
              experiences to break down complex financial concepts into
              digestible formats.
            </li>
            <li className="text-xl md:text-2xl">
              <b>Inefficiency:</b> Encourage enthusiasts to share their
              knowledge and experiences. Host discussions, Q&A sessions with
              experts, and even allow users to create educational content
              themselves, fostering a sense of ownership and expertise within
              the community.
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">Approach</h3>
          <p className="text-xl md:text-2xl">
            I employed the Double Diamond design process to guide me through my
            design process
          </p>
          <img src={double} alt="" />
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">Discover</h3>
          <p className="text-xl md:text-2xl">
            I created two personas by combining research and user understanding.
            These personas ensured user-focused design decisions, informed
            content placement, and efficient communication. They guided testing,
            aligned client expectations, and led to a user-centric design
          </p>
          <div className="flex flex-col md:flex-row">
            <img src={user1} alt="" className="md:w-1/2" />
            <img src={user2} alt="" className="md:w-1/2" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">Defining Phase</h3>
          <p className="text-xl md:text-2xl">
            We utilized empathy maps though the user personas to synthesize user
            emotions and experiences, gaining deeper insights into their
            thoughts and behaviors.
          </p>
          <img src={problem} alt="" />
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">
            How it influenced design decisions
          </h3>
          <p className="text-xl md:text-2xl">
            During the discovery phase, the insights we collected shaped our
            design choices by focusing on user-centric features like seamless
            anonymity, strong privacy, and community involvement. The exercises
            that fostered empathy allowed us to develop a design approach that
            connected with our target audience.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">
            Challenges Faced
          </h3>
          <p className="text-xl md:text-2xl">
            During the discovery phase, the insights we collected shaped our
            design choices by focusing on user-centric features like seamless
            anonymity, strong privacy, and community involvement. The exercises
            that fostered empathy allowed us to develop a design approach that
            connected with our target audience.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">
            Developing Phase
          </h3>
          <ol>
            <li className="text-xl md:text-2xl">
              Ideate and Conceptualize: I conducted brainstorming sessions with
              the design team to explore creative ideas and potential solutions
              to address user needs.
            </li>
            <li className="text-xl md:text-2xl">
              Low-Fidelity Prototyping: Created rough sketches and paper
              prototypes to visualize and test various design concepts and
              interaction flows.
            </li>
          </ol>
          <img src={developing} alt="" />
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">Delivery</h3>
          <ol>
            <li className="text-xl md:text-2xl">
              High-Fidelity Prototyping: I translated the refined design
              concepts into interactive high-fidelity prototypes to simulate the
              user experience.
            </li>
            <li className="text-xl md:text-2xl">
              Collaboration with Developers: We worked closely with developers
              to ensure technical feasibility and align design vision with
              implementation.
            </li>
          </ol>
          <img src={delivery} alt="" />
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-2xl md:text-3xl">Conclusion</h3>
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

export default Artefix;
