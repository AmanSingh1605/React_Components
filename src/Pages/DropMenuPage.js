import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import DropMenu1 from "../Elements/DropMenu/DropMenu1";
import DropMenu2 from "../Elements/DropMenu/DropMenu2";
import { useState } from "react";
import DropMenu3 from "../Elements/DropMenu/DropMenu3";

const DropMenuPage = () => {
  const [selected, setSelected] = useState({
    name: "Dropdown Menu",
    value: "null",
  });

  const handleSelected = (option) => {
    setSelected(option);
  };

  const options = [
    { name: "Apple", value: "apple" },
    { name: "Orange", value: "orange" },
    { name: "Pears", value: "pears" },
    { name: "Grapes", value: "grapes" },
  ];

  const dropMenuList = [
    {
      id: 0, element: <DropMenu1
        options={options}
        value={selected}
        onChange={handleSelected}
      />,
    },
    {
      id: 1, element: <DropMenu2
        options={options}
        value={selected}
        onChange={handleSelected}
      />
    },
    {
      id: 2, element: <DropMenu3
        options={options}
        value={selected}
        onChange={handleSelected}
      />
    },
  ];

  const menuScript = [
    `import { useState, useRef, useEffect } from "react";
    import { RiAddFill } from "react-icons/ri";
    import { CSSTransition } from "react-transition-group";
    import { styled } from "styled-components"
    
    const Wrapper = styled.div\`
    .heading-section{
      padding : 10px;
      background : #2d2f31; 
      color : white;
      font-size : 1.2em;
      font-variant : small-caps;
      cursor : pointer;
    }
    
    .menu-enter {
      max-height:0;
    }
    
    .menu-enter-active {
      max-height:400px;
      overflow:hidden;
      transition: all 200ms ease-in;
    }
    
    .menu-exit {
        max-height:400px;
    }
    
    .menu-exit-active {
      max-height:0;
      overflow: hidden;
      transition: all 200ms ease-out;
    }
    \`
    
    const DropMenu1 = ({ options, value, onChange }) => {
      const [isOpen, setIsOpen] = useState(false);
      const divEl = useRef();
    
      const handleClick = () => {
        setIsOpen(!isOpen);
      };
    
      const handleSelection = (option) => {
        onChange(option);
        setIsOpen(false);
      };
    
      useEffect(() => {
        const handler = (event) => {
          if (!divEl.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener("click", handler, true);
    
        return () => document.removeEventListener("click", handler, true);
      }, []);
    
      const renderList = options.map((option) => {
        return (
          <div
            className="text-center p-2 cursor-pointer"
            onClick={() => handleSelection(option)}
            key={option.value}
          >
            {option.name}
          </div>
        );
      });
    
      return (
        <Wrapper ref={divEl} className=" border border-neutral-500 mx-5 w-60 relative">
          <div
            className="heading-section flex justify-between"
            onClick={handleClick}
          >
            <div className="">{value.name}</div>
            <div className="text-2xl">
              <RiAddFill style={{ color: "white" }} />
            </div>
          </div>
          <CSSTransition in={isOpen} unmountOnExit timeout={200} classNames="menu" >
            <div className="" >
              {renderList}
            </div>
          </CSSTransition>
        </Wrapper>
      );
    };
    
    export default DropMenu1;
    `, `import { useState, useRef, useEffect } from "react";
    import { AiOutlineRight } from "react-icons/ai";
    import { styled } from "styled-components"
    import { CSSTransition } from "react-transition-group";
    
    const Wrapper = styled.div\`
    
    .menu-enter {
     max-height:0;
    
    }
    
    .menu-enter-active {
      max-height:400px;
      overflow:hidden;
      transition: all 300ms ease-in;
    }
    
    .menu-exit {
        max-height:400px;
    }
    
    .menu-exit-active {
      max-height:0;
      overflow:hidden;
      transition: all 300ms ease-out;
    }
    
    \`
    
    const DropMenu2 = ({ options, value, onChange }) => {
      const [isOpen, setIsOpen] = useState(false);
      const divEl = useRef();
    
      const handleClick = () => {
        setIsOpen(!isOpen);
      };
      const handleSelection = (option) => {
        onChange(option);
        setIsOpen(false);
      };
    
      useEffect(() => {
        const handler = (event) => {
          if (!divEl.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener("click", handler, true);
    
        return () => document.removeEventListener("click", handler, true);
      }, []);
    
      const renderList = options.map((option) => {
        return (
    
          <div
            className="bg-sky-400 text-white hover:border-s-4 border-sky-700 cursor-pointer hover:bg-sky-500 p-2 transition duration-300 "
            onClick={() => handleSelection(option)}
            key={option.value}
          >
            {option.name}
          </div>
    
        );
      });
    
      return (
        <Wrapper ref={divEl} className="mx-5 w-60 relative">
          <div
            className="heading-section flex justify-between bg-slate-900 text-white p-2"
            onClick={handleClick}
          >
            <div className=" text-xl">{value.name}</div>
            <div className="text-xl flex items-center">
              {isOpen ? <AiOutlineRight className="text-blue-500 rotate-90 transition duration-500" /> : <AiOutlineRight className="text-white transition duration-500" />}
            </div>
          </div>
          <CSSTransition in={isOpen} unmountOnExit timeout={500} classNames="menu">
    
            <div className="">{renderList}</div>
    
          </CSSTransition>
        </Wrapper>
      );
    };
    
    export default DropMenu2;
    `,
    `import { useState, useRef, useEffect } from "react";
    import {styled} from "styled-components";
    import { IoMdArrowDropdown } from "react-icons/io";
    import { CSSTransition} from "react-transition-group";
    
    const Wrapper=styled.div\`
    
    .dropmenu:before {
      position: absolute;
      top: -20px;
      left: 0;
      width: 100%;
      height: 20px;
      content: '';
      display: block;
      z-index: 1;
    }
    .dropmenu:after {
      position: absolute;
      top: 48px;
      left: 20px;
      width: 0; 
      height: 0; 
      border-left: 8px solid transparent;
      border-right: 8px solid transparent; 
      border-bottom: 8px solid #fff;
      content: '';
      display: block;
      z-index: 2;
    
    }
    
    .menu-enter {
      opacity: 0.01;
      transform: translateY(20px);
    }
    
    .menu-enter-active {
      opacity: 1;
      transform: translateY(0);
      transition: all 200ms linear;
    }
    
    .menu-enter-done {
      opacity: 1;
    }
    
    .menu-exit {
        opacity: 1;
    }
    
    .menu-exit-active {
      opacity: 0.01;
      transform: translateY(20px);
      transition: all 200ms linear;
    
    }
    .menu-exit-done {
    opacity:0;
    }
    \`
    
    
    const DropMenu3 = ({ options, value, onChange }) => {
        const [isOpen, setIsOpen] = useState(false);
        const divEl = useRef();
    
        const handleClick = () => {
            setIsOpen(!isOpen);
        };
        const handleSelection = (option) => {
            onChange(option);
            setIsOpen(false);
        };
    
        useEffect(() => {
            const handler = (event) => {
                if (!divEl.current.contains(event.target)) {
                    setIsOpen(false);
                }
            };
    
            document.addEventListener("click", handler, true);
    
            return () => document.removeEventListener("click", handler, true);
        }, []);
    
        const renderList = options.map((option) => {
            return (
                <div
                    className="flex justify-between text-[#112771] bg-[#fff] hover:bg-[#112771] hover:text-[#F5E2A5] transition duration-200 item-center font-semibold p-2 px-4 my-1 rounded cursor-pointer"
                    onClick={() => handleSelection(option)}
                    key={option.value}
                >
                    {option.name}
                </div>
            );
        });
    
        return (
            <Wrapper ref={divEl} className="mx-5 w-60 relative">
                <div
                    className="shadow-[0_14px_25px_0_rgba(17,39,113,0.4)] bg-[#112771] text-[#F5E2A5] flex justify-between cursor-pointer px-4 py-2 font-bold rounded-md mb-4"
                    onClick={handleClick}
                >
                    <div className="">{value.name}</div>
                    <div className="text-2xl">
                        <IoMdArrowDropdown />
                    </div>
                </div>
    
                    <CSSTransition in={isOpen} unmountOnExit timeout={200} classNames="menu">
                        <div className="dropmenu bg-[#fff] shadow-[0_14px_35px_0_rgba(9,9,12,0.4)] rounded-md p-2">{renderList}</div>
                    </CSSTransition>
            </Wrapper>
        );
    };
    
    export default DropMenu3;
    `
  ]

  const renderElements = dropMenuList.map((menu) => {
    const handleCopy = () => {
      navigator.clipboard.writeText(menuScript[menu.id]);
    }

    return (
      <div className="flex items-start justify-between min-h-[200px] bg-[#FEFEFF] shadow-[0_3px_8px_rgb(0,0,0,0.24)] hover:shadow-xl transition-shadow border-1 p-2 my-4 me-4" key={menu.id}>
        {menu.element}
        <button onClick={handleCopy} className='font-bold border-2 bg-[#fff] text-green-700 border-green-700 rounded p-2 my-2 mx-5 active:shadow-xl hover:bg-green-700 hover:text-white'>Copy Element</button>
      </div>
    );
  });



  return (
    <div className=" w-screen md:relative md:pt-[10px] pt-[20px] ">
      <div className="md:w-4/5 md:absolute md:right-0 px-4 py-4 text-center md:text-left pe-12 ">
        <header className="text-3xl font-bold mb-4">Drop Down Menu</header>
        <h1 className='text-xl font-semibold underline '>How to Use: </h1>
        <p className='my-4 mb-16'>
          Copy the code of selected Element. Create a new Element in your React Project using copied code. Import element with any name and pass following Props through the Element:
          <div className='ms-4'>
            <heading className='font-bold underline text-lg'>Props</heading>
            <ul className='list-disc ms-4'>
              <li>
                <span className='font-semibold hover:text-blue-700 hover:underline'>options</span><span> : array of objects contains two values(name,value).</span>
              </li>
              <li>
                <span className='font-semibold hover:text-blue-700 hover:underline'>value</span><span> : This prop handle the updation of head tag of menu. </span>
              </li>
              <li>
                <span className='font-semibold hover:text-blue-700 hover:underline'>onChange</span><span> : User use this prop as a function which recieve selected value from menu. </span>
              </li>
            </ul>
            <div>
              <heading>Example: </heading>
              <SyntaxHighlighter language='jsx' style={atomDark}>{`
import Dropmenu from './Elements';

const [value, setValue] = useState({name:"option 1", value: 1});

const options = [
  {name: "option 1", value: 1},
  {name: "option 2", value: 2},
  {name: "option 3", value: 3}
  ];

const handleChange=(temp)=>{
  setValue(temp);
}

return(
    < ... >
    <Dropmenu option={options} value={value} onChange={handleChange} />
  );`}
              </SyntaxHighlighter>
            </div>
          </div>
        </p>
        <heading className='font-semibold text-2xl underline '>Available Components: </heading>
        <div className='my-8'>
          {renderElements}
        </div>
      </div>
    </div>
  );
};

export default DropMenuPage;
