import React from "react";
import Video_section_photo from "../assets/Video_section_photo.png";
import images from "./Images";

function Home() {
  return (
    <>
      <div className="w-full h-screen flex bg-black text-white ">
        <div
          style={{ backgroundImage: `url(${Video_section_photo})` }}
          className="w-[70.7%] h-[87%] bg-contain"
        ></div>
        <div className=" gap-4 p-[2rem] py-[4rem] w-[29%]">
          <span className="text-sm font-bold">Grand Theft Auto VI</span>
          <h2 className="font-semibold text-[2.5rem] mt-2">Trailer 1</h2>

          <button className="mt-6 mx-2 py-4 px-16 rounded border ">
            WATCH NOW
          </button>
        </div>
      </div>
      <div className="w-full bg-black p-[3.5rem]">
        <div className="  mx-auto bg-black flex gap-6 flex-wrap">
          {images.map((items) => {
            return (
              <div className="h-[42rem] w-[28rem] rounded-md border-[#282828] border mx-auto bg-black">
                <img src={items.images} className="w-full h-[70%]" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
