import { useState, useRef, useEffect } from "react";
import { RiAddFill } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";
import { styled } from "styled-components"

const Wrapper = styled.div`
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
`

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
