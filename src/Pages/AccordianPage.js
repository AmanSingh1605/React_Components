import {PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Accordion1 from '../Elements/Accordion/Accordion1';
import Accordion2 from '../Elements/Accordion/Accordion2';
import Accordion3 from '../Elements/Accordion/Accordion3';



const AccordianPage = () => {

  const items = [
    {
      id: "0",
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, iste!",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet ad laudantium, odit cupiditate saepe deserunt delectus, nihil dolorum, obcaecati quae harum repudiandae maiores vel! Voluptas nulla quidem sapiente praesentium hic placeat!",
    },
    {
      id: "1",
      label: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, velit optio placeat exercitationem cumque qui veritatis. Corporis repudiandae provident qui ratione excepturi? Veniam delectus numquam sequi perspiciatis eos.",
    },
    {
      id: "2",
      label: "Lorem ipsum dolor sit amet.",
      content:
        " Lorem ipsum, dolor sit a met consectetur adipisicing elit. Mollitia, dolorem laudantium? Earum ad aliquam laudantium, ex ipsam excepturi, reprehenderit incidunt blanditiis praesentium placeat voluptates at iure architecto! Natus facilis placeat mollitia at.",
    },
  ];

  const accordionScirpt = [`import { useState } from "react";
  import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
  import { CSSTransition } from "react-transition-group";
  import { styled } from "styled-components";
  
  const Temp=styled.div\`
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
  \`;
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
  `, `import { useState } from "react";
  import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from "react-icons/bs";
  import { CSSTransition } from "react-transition-group";
  import {styled } from "styled-components";
  
  
  const Temp=styled.div\`
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
  
  \`;
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
  `, `import { useState } from "react";
  import { SiAddthis } from "react-icons/si";
  import {CgRemoveR} from "react-icons/cg"
  import { CSSTransition } from "react-transition-group";
  import { styled } from "styled-components";
  
  const Temp=styled.div\`
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
  \`;
  
  
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
  `];

  const accordionElements = [
    { id: 0, element: <Accordion1 items={items} /> },
    { id: 1, element: <Accordion2 items={items} /> },
    { id: 2, element: <Accordion3 items={items} /> },
  ];

  const renderElements = accordionElements.map((accordion) => {
    const handleCopy = () => {
      navigator.clipboard.writeText(accordionScirpt[accordion.id]);
    }
    return (
      <div className="shadow-[0_3px_8px_rgb(0,0,0,0.24)] hover:shadow-xl transition-shadow border-1 p-2 my-4" key={accordion.id}>
        {accordion.element}
        <button onClick={handleCopy} className='font-bold border-2 text-green-700 border-green-700 rounded p-2 m-2 active:shadow-xl hover:bg-green-700 hover:text-white'>Copy Element</button>
      </div>
    );
  })

  return (
    <div className=" w-screen md:relative md:pt-[10px] pt-[20px] z-0">
      <div className="md:w-4/5 md:absolute md:right-0 px-4 py-4 text-center md:text-left  pe-12">
        <header className="text-4xl font-bold mb-4">Accordion</header>
        <h1 className='text-xl font-semibold underline '>How to Use: </h1>
        <p className='my-4 mb-16'>
          Copy the code of selected Accodrion Element. Create a new Element in React Project using copied code. Import element with any name and pass following Props through the Accordion Element:
          <div className='ms-4'>
            <heading className='font-bold underline text-lg'>Props</heading>
            <ul className='list-disc ms-4'>
              <li>
                <span className='font-semibold hover:text-blue-700 hover:underline'>items</span><span> : array of objects contains three values(id,label,content).</span>
              </li>
            </ul>
            <div>
              <heading>Example: </heading>
              <SyntaxHighlighter language='jsx' style={atomDark}>{`
import Accordion from './Elements';
const temp = [
  {id : "0",
  label: "heading 1"
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  {id : "2",
  label: "heading 2"
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
  ];

return(
    < ... >
    <Accordion1 items={temp} />
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
}

export default AccordianPage;
