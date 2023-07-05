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
      id: 1, element: <DropMenu1
        options={options}
        value={selected}
        onChange={handleSelected}
      />,
    },
    {
      id: 2, element: <DropMenu2
        options={options}
        value={selected}
        onChange={handleSelected}
      />
    },
    {
      id: 3, element: <DropMenu3
        options={options}
        value={selected}
        onChange={handleSelected}
      />
    },
  ];

  const renderElements = dropMenuList.map((menu) => {
    return (
      <div className="flex items-start justify-between min-h-[200px] bg-[#FEFEFF] shadow-[0_3px_8px_rgb(0,0,0,0.24)] hover:shadow-xl transition-shadow border-1 p-2 my-4 me-4" key={menu.id}>
        {menu.element}
        <button className='font-bold border-2 bg-[#fff] text-green-700 border-green-700 rounded p-2 my-2 mx-5 active:shadow-xl'>Copy Element</button>
      </div>
    );
  })

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
              <div className="bg-[#011627] text-[#d6deeb] p-4 my-4 rounded-lg font-['Fira_Code'] whitespace-pre">{`
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

              </div>
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
