import React from "react";
import Video_section_photo from "../assets/Video_section_photo.png";
// import hero_image from "../assets/newswire_img.jpg";

function Videos() {
  return (
    <div className="w-full h-screen flex bg-black text-white ">
      <div
        style={{ backgroundImage: `url(${Video_section_photo})` }}
        className="w-[71%] h-[87%] bg-contain"
      ></div>
      <div className=" gap-4 p-[2rem] py-[4rem] w-[29%]">
        <span className="text-sm font-bold">Grand Theft Auto VI</span>
        <h2 className="font-semibold text-[2.5rem] mt-2">Trailer 1</h2>

        <button className="mt-6 mx-2 py-4 px-16 rounded border hover:bg-[#FCAF17] hover:text-black hover:border-none">WATCH NOW</button>
      </div>
    </div>
  );
}

export default Videos;
