import React from "react";
import hero_image from "../assets/newswire_img.jpg";

function Newswire() {
  return (
    <div>
      <div className="w-full h-screen flex bg-black text-white ">
        <div
          style={{ backgroundImage: `url(${hero_image})` }}
          className="w-[71%] h-[87%] bg-contain"
        ></div>
        <div className=" gap-4 p-[2rem] py-[4rem] w-[29%]">
          <span>GTA ONLINE</span>
          <span className="text-sm text-[#929292] mx-4">December 10 ,2024</span>
          
          
            <h2 className="font-semibold text-[2.5rem] mt-6">GTA Online: Agents of Sabotage Now Available</h2>
        
        </div>
      </div>
    </div>
  );
}

export default Newswire;
