import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import modalBg from "../assets/images/modal.png";
import categoryTitle from "../assets/images/category-title.png";
import ButtonImage from "../components/ButtonImage";
import { Progress } from "@material-tailwind/react";
import Button4 from "./Button4";
import Button3 from "./Button3";
import { useScore } from "../hooks/useScore";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";

function Category() {
  const { setCategory } = useScore();
  const [showCategory, setShowCategory] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (param) => {
    window.location.href = `./playing/${param}`;
  };
  useEffect(() => {
    localStorage.setItem("rightAns", JSON.stringify([]));
    localStorage.setItem("selectedAns", JSON.stringify([]));
  }, []);

  return (
    <div>
      <div className=" relative flex items-center justify-start  h-screen flex-col ">
        <div className=" flex flex-col w-11/12 md:w-7/12 lg:w-10/12 items-center justify-center h-[7rem] md:h-[8rem]  lg:h-[15rem]  my-7">
          {/* <h1 className="  text-[4rem] text-white font-bold ">Category</h1> */}
          <Image fluid src={categoryTitle} />
        </div>

        <div className=" flex flex-col items-center justify-center gap-1 w-[14rem] lg:w-[24rem] h-[21rem] lg:h-[35rem] z-10">
          <Button4
            onFunction={() => {
              onSubmit("general");
            }}
            title="General"
          />

          <Button4
            onFunction={() => {
              onSubmit("computer");
            }}
            title={"Computer"}
          />
          <Button4
            onFunction={() => {
              onSubmit("iqtest");
            }}
            title={"IQ Test"}
          />
          <Button3
            onFunction={() => {
              navigate("/");
            }}
            title={"Back"}
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
