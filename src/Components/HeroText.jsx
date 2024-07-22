/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: HeroText.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import logo from "../assets/policasino.png";

const HeroText = () => {
  const name = "";

  return (
    <div
      className="noselect w-fit h-fit text-primary-400
      0 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "Merienda", fontStyle: "italic", fontWeight: "200"}}
        >
        <img src={logo} alt="logo" style={{width:'2em', marginTop:'-1em'}} />
          <m.span
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
  
            style={{fontSize:'0.3em'}}
          >
            "Al ritmo del alma"
          </m.span>
          <m.span
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{fontSize:'0.15em'}}
          >
            Desde 2018
          </m.span>

        </m.h1>
      </LazyMotion>
    </div>
  );
};

export default HeroText;
