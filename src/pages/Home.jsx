import buttonBg from "../assets/images/buttonbg.png";
import komiHome from "../assets/images/komi-home.png";
import bulb from "../assets/images/bulb.png";
import tool from "../assets/images/tool.png";
import calculator from "../assets/images/calculator.png";
import title from "../assets/images/title.png";
import title2 from "../assets/images/title-2.png";
import { useEffect, useState } from "react";
import ButtonImage from "../components/ButtonImage";
import Button4 from "../components/Button4";
import About from "../components/About";

const buttons = ["Play", "Options", "About"];
function Home() {
  const [showAboutModal, setShowAboutModal] = useState(false);

  const onPlay = () => {
    window.location.href = "/category";
  };
  const onOption = () => {
    alert("No option available.");
  };
  const onAbout = () => {
    // alert("About Us ??????");
    setShowAboutModal(true);
  };

  useEffect(() => {
    localStorage.setItem("rightAns", JSON.stringify([]));
    localStorage.setItem("selectedAns", JSON.stringify([]));
  }, []);
  return (
    <div className=" flex flex-col items-center justify-center  h-screen gap-6 ">
      {showAboutModal && <About setModal={setShowAboutModal} />}

      {/* <img src={komiHome} className=" fixed bottom-0 right-0" /> */}
      {/* <div className=" flex items-center justify-center gap-2 right-4">
        {" "}
        <img src={bulb} className=" w-[16rem] -rotate-[35deg]" />
        <h1 className=" text-[9rem]">Hardware Quiz</h1>
        <img src={calculator} className=" w-[14rem] " />
      </div> */}
      <img src={title2} className="  w-[90%] lg:w-[50%]" />
      <div className=" flex flex-col ">
        {buttons.map((i, index) => (
          <div
            key={index}
            className="flex flex-col  w-[11rem] lg:w-[20rem] h-[5rem] lg:h-[7rem]  lg:pt-0"
          >
            <Button4
              onFunction={
                index == 0
                  ? () => onPlay()
                  : index == 1
                  ? () => onOption()
                  : () => onAbout()
              }
              title={i}
            />
          </div>
        ))}
      </div>
      <div className=" text-[#7958AF]">
        Copyright@{new Date().getFullYear()}, komi san approved.{" "}
      </div>
    </div>
  );
}

export default Home;
