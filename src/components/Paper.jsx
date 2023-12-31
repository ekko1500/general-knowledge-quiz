import paperBg from "../assets/images/paper-bg.gif";
import yellowTexture from "../assets/images/yellow-texture.png";

function Paper() {
  return (
    <div
      className=" absolute top-0 -z-10 h-screen w-screen bg-[#F9D131] "
      style={{
        backgroundImage: `url(${yellowTexture})`,
        backgroundRepeat: "repeat-y",
      }}
    >
      {/* <video autoPlay muted loop id="myVideo">
        <source src="../src/assets/video/paper-white.mp4" type="video/mp4" />
      </video> */}
      {/* <img src={yellowTexture} className="h-screen w-screen object-cover" /> */}
    </div>
  );
}

export default Paper;
