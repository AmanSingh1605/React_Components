import { useState } from "react";
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from "react-icons/bs";
import { CSSTransition } from "react-transition-group";
import {styled } from "styled-components";


const Temp=styled.div`
.content-enter {
  opacity: 0;
  max-height: 0;
}

.content-enter-active {
  opacity: 1;
  overflow: hidden;
  max-height: 400px;
  transition: max-height 400ms, opacity 400ms;
}

.content-enter-done {
  max-height: auto;
}

.content-exit {
  max-height: 400px;
}

.content-exit-active {
  max-height:0;
  transition:all 400ms;
  overflow:hidden;
}

`;
const Accordion2 = ({ items }) => {
  const [expandedIndex, setExpendedIndex] = useState(-1);

  const handleClick = (index) => {
    if (expandedIndex === index) {
      setExpendedIndex(-1);
    } else {
      setExpendedIndex(index);
    }
  };

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div className="my-1 border-2 border-neutral-700" key={item.id}>
        <div className="border-b-2 border-neutral-700 flex font-bold justify-between px-1 hover:bg-neutral-300">
          {item.label}
          <button
            className="arrow px-4"
            onClick={() => {
              handleClick(index);
            }}
          >
            {isExpanded ? <BsFillArrowUpSquareFill /> : <BsFillArrowDownSquareFill />}
          </button>
        </div>
        <CSSTransition in={isExpanded} unmountOnExit timeout={400} classNames="content">
          <div className="content-section px-2">
            {item.content}
          </div>
        </CSSTransition>
      </div>
    );
  });

  return (
   <Temp className="my-2 mx-2 w-3/5">
      {renderItems}
    </Temp>
  );
};

export default Accordion2;
