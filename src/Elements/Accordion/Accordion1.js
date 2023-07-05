import { useState } from "react";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { CSSTransition } from "react-transition-group";
import { styled } from "styled-components";

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
  opacity: 1;
  max-height: auto;
}

.content-exit {
  opacity: 1;
  max-height: 400px;
}

.content-exit-active {
  opacity: 0;
  max-height:0;
  transition:all 400ms;
  overflow:hidden;
}

.content-exit-done {
  opacity: 0;
}
`;
const Accordion1 = ({ items }) => {
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
      <div className="" key={item.id}>
        <div className="header-section flex font-bold bg-slate-300 border border-neutral-400 justify-between px-1">
          {item.label}
          <button
            className="arrow px-4 hover:text-yellow-500"
            onClick={() => {
              handleClick(index);
            }}
          >
            {isExpanded ? <GoTriangleDown /> : <GoTriangleRight />}
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
   <Temp className="border border-neutral-400 my-2 mx-2 w-3/5">
      {renderItems}
    </Temp>
  );
};

export default Accordion1;
