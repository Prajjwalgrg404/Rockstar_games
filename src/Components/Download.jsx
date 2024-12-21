import React from "react";
import download_image from "../assets/download_img.jpg";

function Download() {
  return (
    <div>
      <div className="w-full h-screen py-[2.5rem] bg-black text-white">
        <div className="w-[90%] bg-black h-full flex gap-8 mx-auto">
          <div
            style={{ backgroundImage: `url(${download_image})` }}
            className="w-[45%] h-[89%] mx-[3rem] my-[4rem] bg-cover"
          ></div>
          <div className="bg-black gap-4 p-[2rem] py-[4rem] w-[50%]">
            <h2 className="text-[2.7rem] tracking-tighter font-bold ">
              Red Dead Redemption 2
            </h2>
            <p className="text-[1.3rem] font-semibold">
              America, 1899. The end of the Wild West era has begun as lawmen
              hunt down the last remaining outlaw gangs. Those who will not
              surrender or succumb are killed. <br /> <br />
              After a robbery goes terribly
              wrong in the western town of Blackwater, Arthur Morgan and the Van
              der Linde gang are forced to flee. With federal agents and the
              best bounty hunters in the nation massing on their heels, the gang
              must rob, steal, and fight their way across the rugged heartland
              of America in order to survive. As deepening internal divisions
              threaten to tear the gang apart, Arthur must make a choice between
              his own ideals and loyalty to the gang who raised him.
            </p>
            <button className="mt-10 mx-2 py-6 font-bold px-[4rem] rounded border hover:bg-[#FCAF17] hover:text-black hover:border-none">DOWNLOAD NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
