/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: About.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { memoji } from "../Constants/constants";
import { introduction } from "../Constants/constants";
import ImageSlider from "../Components/elements/ImageSlider";

const About = () => {
  return (
    <div id="nosotros" className="w-full flex justify-center overflow-hidden-web" >
      <div className="w-full xl:w-[70%] flex flex-col pb-17">
        <div className="w-full" >
          <SectionTitle title="Poli Casino" subtitle="Bienvenidos a" style={{ fontFamily: "Open Sans"}} />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Open Sans" }}
                className="text-grayscale-50 p-1 text-center flex flex-col gap-6"
              >
                <span>{introduction.text[0]}</span>
                <span>{introduction.text[1]}</span>
                <span>{introduction.text[2]}</span>
                <span>{introduction.text[3]}</span>
              </m.p>
            </LazyMotion>
          </div>
          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[80%] h-[300px] sm:h-[350px] flex justify-center items-center">
              <ImageSlider images={memoji.image} />
              {/* <img 
                src={memoji.image} 
                alt="" 
                style={{ borderRadius: '30px' }} // Adjust the value as needed
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
