import dtcDesktop from "../../../assets/DTC_page (1).png";
import dtcMobile from "../../../assets/MOBILE-DTC (1).png";
import Nav from "../../../components/shared/Nav";

const DTC = () => {
  return (
    <>
      <Nav color="#ffffff" />
      <div className="flex justify-center">
        <img src={dtcDesktop} alt="" className="hidden md:block w-full" />
        <img src={dtcMobile} alt="" className="md:hidden w-full" />
      </div>
    </>
  );
};

export default DTC;
