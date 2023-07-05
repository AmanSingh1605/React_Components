import { useState } from "react";
import { SiAddthis } from "react-icons/si";
import {CgRemoveR} from "react-icons/cg"
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
  max-height: 400px;
}

.content-exit-active {
  max-height:0;
  transition:all 400ms;
  overflow:hidden;
}
`;


const Accordion3 = ({ items }) => {
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
      <div className="my-1" key={item.id}>
        <div className="border-b-2 border-neutral-700 flex font-bold px-1 hover:bg-neutral-300">
          <button
            className="arrow px-2"
            onClick={() => {
              handleClick(index);
            }}
          >
            {isExpanded ? <CgRemoveR /> : <SiAddthis />}
          </button>
          {item.label}
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

export default Accordion3;
