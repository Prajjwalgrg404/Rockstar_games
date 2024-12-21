import React, { useState } from "react";
import photo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import inside from "./Home_inside";

function Header() {
  const hover_effect =
    "px-6 py-[1.7rem] border-b-2 border-transparent hover:border-b-2 hover:border-white";
  const active_hover =
    "px-6 py-[1.7rem] border-b-2 border-transparent border-b-2 border-white";

  const [active, setactive] = useState(1);

  function Toggle() {
    setactive(!active);
  }

  return (
    <>
      <header>
        <div className="h-20 bg-black border-b-1 border-gray-500  w-full cursor-pointer text-white flex justify-between px-[6rem]">
          <div className="flex items-center justify-between ">
            <Link to="/">
              <img className="w-8 bg-black hover:scale-110" src={photo} />
            </Link>
            <div className="flex justify-center items-center pl-[18.5rem] text-sm">
              <h4
                className={`${hover_effect} ${
                  active === 1 ? active_hover : ""
                }`}
                onClick={() => {
                  setactive(1);
                  Toggle();
                }}
              >
                Games <i className="fa-solid fa-chevron-down"></i>
              </h4>

              <Link to="newswire">
                <h4
                  className={`${hover_effect} ${
                    active === 2 ? active_hover : ""
                  }`}
                  onClick={() => setactive(2)}
                >
                  Newswire
                </h4>
              </Link>
              <Link to="videos">
                <h4
                  className={`${hover_effect} ${
                    active === 3 ? active_hover : ""
                  }`}
                  onClick={() => setactive(3)}
                >
                  Videos
                </h4>
              </Link>
              <Link to="download">
                <h4
                  className={`${hover_effect} ${
                    active === 4 ? active_hover : ""
                  }`}
                  onClick={() => setactive(4)}
                >
                  Download
                </h4>
              </Link>
              <h4
                className={`${hover_effect} ${
                  active === 5 ? active_hover : ""
                }`}
                onClick={() => setactive(5)}
              >
                Store <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </h4>
              <h4
                className={`${hover_effect} ${
                  active === 6 ? active_hover : ""
                }`}
                onClick={() => setactive(6)}
              >
                Support{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </h4>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8">
            <button className="px-2 py-1 bg-[#E19808] text-black tracking-tighter rounded text-sm font-semibold">
              GET LAUNCHER
            </button>
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <span className="px-2 py-1 bg-[#272727] rounded-full">
              <i className="fa-regular fa-user"></i>
            </span>
          </div>
        </div>
      </header>
      <div
        className={`w-full bg-[#121212] absolute overflow-hidden transition-all duration-700 ${
          active ? "h-0" : "h-[30rem]"
        }`}
      >
        <div className="flex justify-between px-[5rem] ">
          <h2 className=" text-white pt-[4rem] text-[2rem] font-bold tracking-tighter mb-4">
            Featured Games
          </h2>
          <h2 className="text-white pt-[4rem] text-[1.2rem] font-bold tracking-tighter">
            VIEW ALL <i className="fa-solid fa-arrow-right"></i>
          </h2>
        </div>
        <div className="flex mx-[5rem] gap-8">
          {inside.map((item) => {
            return (
              <div className="w-[15rem] h-[18.5rem] rounded-md overflow-hidden border border-[#282828]  ">
                <img src={item.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Header;
