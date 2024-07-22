/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Projects.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/
import React from 'react';
import SectionTitle from "../Components/SectionTitle";
import GalleryGrid from "../Components/GalleryGrid";
import { mediaItems } from "../assets";

const Projects = () => {
  return (
    <div id="eventos" className="w-full flex justify-center ">
      <div className="w-full xl:w-[70%] flex flex-col pb-20 mt-20">
        <div className="w-full">
          <SectionTitle title="EVENTOS" subtitle="Nuestras participaciones" />
        </div>
        <GalleryGrid mediaItems={mediaItems} />
      </div>
    </div>
  );
};

export default Projects;
