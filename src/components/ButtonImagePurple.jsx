import buttonBg from "../assets/images/buttonbg.png";
import grayBg from "../assets/images/gray-bg.png";
import PurpleImage from "../assets/images/button-purple.png";

function ButtonImagePurple({ text, onFunction }) {
  return (
    <div
      onClick={() => onFunction()}
      className="flex relative  text-[2rem] h-[5rem]  cursor-pointer  w-[20rem] text-black hover:text-white items-center justify-center bg-white border-4 border-[#7958AF]"
      style={{
        backgroundImage: `url(${PurpleImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: "background-image 0.1s ease-in-out",
        borderRadius: "10px",
        border: "3px solid black",
        textShadow: "2px 2px 0px black",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundImage = `url(${grayBg})`;
        e.currentTarget.style.border = "3px solid black";
        e.currentTarget.style.textShadow = "0px 0px 0px black";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundImage = `url(${PurpleImage})`;
        e.currentTarget.style.border = "3px solid black";
        e.currentTarget.style.textShadow = "2px 2px 0px black";
      }}
    >
      <h1 className=" z-[1] text-[#7958AF] font-bold ">{text}</h1>
    </div>
  );
}

export default ButtonImagePurple;
