import { useState, useRef, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { styled } from "styled-components"
import { CSSTransition } from "react-transition-group";

const Wrapper = styled.div`

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

`

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
