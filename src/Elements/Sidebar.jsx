import { useState, useEffect } from "react";
import { TfiLayoutAccordionList } from "react-icons/tfi"
import { RxButton } from "react-icons/rx"
import { BsMenuButtonWideFill } from "react-icons/bs"
import { ImTable } from "react-icons/im"
import { BiWindows } from "react-icons/bi"
import { AiOutlineHome } from "react-icons/ai"
import { LuComponent } from "react-icons/lu"
import Links from "./Links";

const Sidebar = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth > 700);
  const [runOnce, setRunOnce] = useState(false);
  const linkList = [
    { label: "Buttons", icons: <RxButton className="text-md mr-2" />, path: "/Buttons" },
    { label: "Accordion", icons: <TfiLayoutAccordionList className="text-md mr-2" />, path: "/AccordionPage" },
    { label: "DropDown Menu", icons: <BsMenuButtonWideFill className="text-md mr-2" />, path: "/DropMenuPage" },
    { label: "Table", icons: <ImTable className="text-md mr-2" />, path: "/TablePage" },
    { label: "Modal", icons: <BiWindows className="text-md mr-2" />, path: "/ModalPage" },
  ];

  const renderList = linkList.map((link) => {
    return <li>
      <Links to={link.path} active="border-l-4 border-blue-500 ps-2 text-blue-500" key={link.path}>{link.icons} {link.label}</Links>
    </li>
  });

  const updateScreen = () => {
    setScreenSize(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreen);

    if (!screenSize && runOnce) {
      document.querySelector(".HAMBURGER").addEventListener("click", () => {
        document.querySelector(".HAMBURGER").classList.toggle("active");
        document.querySelector(".nav-bar").classList.toggle("active");
      });
    }
    return () => {
      setRunOnce(true);
      window.removeEventListener("resize", updateScreen);
    };
  });

  return (
    <div className="w-auto pt-[70px] z-10">
      {screenSize ? (
        <div className="fixed bg-slate-100 px-8 py-5 w-1/5 text-center h-screen">
          <div className="grid text-left text-xl">
            <Links to="/" active="border-l-4 border-blue-500 ps-2 text-blue-500" key="1"> <span><AiOutlineHome className="mr-2" /></span> Home </Links>
            <Links to="/Components" active="border-l-4 border-blue-500 ps-2 text-blue-500" key="2"> <span><LuComponent className="mr-2" /></span> Components</Links>
            <ul className="pl-4 text-sm border-l-2">
              {renderList}
            </ul>
          </div>
        </div>
      ) : (
        <div className="fixed w-screen h-auto bg-slate-100 z-10">
          <div className="flex w-screen relative">
            <span className="text-left my-1 px-3 text-lg font-bold">Menu</span>
            <span className="cursor-pointer absolute right-2 my-1 px-2 HAMBURGER ">
              <div className="w-6 h-1 my-1 bg-slate-800 BAR"></div>
              <div className="w-6 h-1 my-1 bg-slate-800 BAR"></div>
              <div className="w-6 h-1 my-1 bg-slate-800 BAR"></div>
            </span>
          </div>
          <div className="nav-bar text-center px-4 bg-slate-100 w-full">
            <Links to="/" active="border-l-4 border-blue-500 ps-2 text-blue-500" key="1"> <span><AiOutlineHome /></span> Home </Links>
            <ul>
              {renderList}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
