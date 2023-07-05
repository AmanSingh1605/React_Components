import { useState, useRef, useEffect } from "react";
import {styled} from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { CSSTransition} from "react-transition-group";

const Wrapper=styled.div`

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
`


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
