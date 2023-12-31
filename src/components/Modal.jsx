import modalBg from "../assets/images/modal.png";

function Modal() {
  return (
    <div
      className="flex relative  text-[4rem] h-[6.5rem]  cursor-pointer  w-[26rem] text-white hover:text-black  justify-center "
      style={{
        backgroundImage: `url(${modalBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: "background-image 0.1s ease-in-out",
        borderRadius: "10px",
        border: "3px solid black",
        textShadow: "2px 2px 0px black",
      }}
    >
      <h1>Are YOuSure ?</h1>
    </div>
  );
}

export default Modal;
