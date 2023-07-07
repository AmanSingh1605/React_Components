import {PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


import SortableTable1 from "../Elements/Table/SortableTable1";
import SortableTable2 from "../Elements/Table/SortableTable2";
import SortableTable3 from "../Elements/Table/SortableTable3";

SyntaxHighlighter.registerLanguage('jsx',jsx);

const TablePage = () => {
  const config = [
    {
      label: "No.",
      render: (obj) => obj.id,
    },
    {
      label: "Fruit", // Name of Column
      render: (obj) => obj.name, //Objects to be present in Column
      header: (obj) => {
        // Function to customize the Header ( it is optional )
        return (
          <div className="text-red-700">
            {obj.label}
          </div>
        );
      },
      sortValue: (obj) => obj.name,
    },
    {
      label: "Count",
      render: (obj) => obj.count,
      sortValue: (obj) => obj.count,
    },
    { label: "Quality", render: (obj) => obj.quality },
  ];

  //Data Array...

  const data = [
    { id: "1", name: "Apple", count: "2", quality: "Good" },
    { id: "2", name: "Orange", count: "5", quality: "Very good" },
    { id: "3", name: "Peach", count: "3", quality: "Fine" },
    { id: "4", name: "Guava", count: "6", quality: "Good" },
    { id: "5", name: "Grapes", count: "10", quality: "Bad" },
    { id: "6", name: "Lemon", count: "7", quality: "Good" },
  ];

  // Function to handle key should be defined by User
  const handleKey = (obj) => {
    return obj.id;
  };

  const tableElements = [
    { id: 0, element: <SortableTable1 config={config} data={data} handleKey={handleKey} /> },
    { id: 1, element: <SortableTable2 config={config} data={data} handleKey={handleKey} /> },
    { id: 2, element: <SortableTable3 config={config} data={data} handleKey={handleKey} /> },
  ]

  const tableScript=[
    {
    table:`import { Fragment } from "react";

    const Table = ({ config, data, handleKey }) => {
      const headings = config.map((heading) => {
        if (!heading.header) {
          return (
            <th className="border-b-2 border-grey-900 px-3" key={heading.label}>
              {heading.label}
            </th>
          );
        }
        return <Fragment key={heading.label}>{heading.header(heading)}</Fragment>;
      });
    
      const tableData = data.map((data) => {
        const values = config.map((value) => {
          return (
            <td className="ps-4 py-2" key={value.render(data)}>
              {value.render(data)}
            </td>
          );
        });
    
        return (
          <tr className="border-b border-grey-900 text-left " key={handleKey(data)}>
            {values}
          </tr>
        );
      });
    
      return (
        <div className="m-5">
          <table>
            <thead className="border-b-2 border-grey-900 px-3">
              <tr>{headings}</tr>
            </thead>
            <tbody>{tableData}</tbody>
          </table>
        </div>
      );
    };
    
    export default Table;
    `,
    sortTable:`import { useState } from "react";
    import Table from "./Table1";
    import { TiArrowUnsorted } from "react-icons/ti";
    import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
    import { styled } from "styled-components";
    
    const Temp=styled.div\`
    .tableHeader:hover .sortIcons{
        opacity: 1;
        transition: all 0.3s;
    }
    
    .tableHeader{
        cursor: pointer;
    }   
    \`;
    
    const SortableTable = (props) => {
      const { config, data } = props;
      const [sortBy, setSortBy] = useState(null);
      const [sortOrder, setSortOrder] = useState(null);
    
      const handleSortBy = (label) => {
        if (label !== sortBy) {
          setSortOrder("asc");
          setSortBy(label);
          return;
        }
        setSortBy(label);
        handleSortOrder();
      };
      const handleSortOrder = () => {
        if (sortOrder === null) {
          setSortOrder("asc");
        } else if (sortOrder === "asc") {
          setSortOrder("desc");
        } else {
          setSortOrder(null);
        }
      };
    
      let updatedData = data;
    
      if (sortBy && sortOrder) {
        const { sortValue } = config.find((column) => column.label === sortBy);
    
        updatedData = [...data].sort((a, b) => {
          const valueA = sortValue(a);
          const valueB = sortValue(b);
    
          const reverseOrder = sortOrder === "asc" ? 1 : -1;
          if (typeof valueA === "string") {
            return valueA.localeCompare(valueB) * reverseOrder;
          } else {
            return (valueA - valueB) * reverseOrder;
          }
        });
      }
    
      const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
          return column;
        } else {
          if (!column.header) {
            return {
              ...column,
              header: () => {
                return (
                  <th onClick={() => handleSortBy(column.label)} key={column.label}>
                    <div className="tableHeader flex items-center">
                      {handleIcon(column.label, sortBy, sortOrder)}
                      {column.label}
                    </div>
                  </th>
                );
              },
            };
          }
    
          return {
            ...column,
            header: () => {
              return (
                <th onClick={() => handleSortBy(column.label)} key={column.label}>
                  <div className="tableHeader flex items-center">
                    {handleIcon(column.label, sortBy, sortOrder)}
                    {column.header(column)}
                  </div>
                </th>
              );
            },
          };
        }
      });
    
      const handleIcon = (label, sortBy, sortOrder) => {
        if (label !== sortBy) {
          return <TiArrowUnsorted className="sortIcons opacity-0" />;
        }
        if (sortOrder === "asc") {
          return <RxTriangleUp className="sortIcons opacity-0" />;
        } else if (sortOrder === "desc") {
          return <RxTriangleDown className="sortIcons opacity-0" />;
        } else if (sortOrder === null) {
          return <TiArrowUnsorted className="sortIcons opacity-0" />;
        }
      };
    
      return (
        <Temp>
          <Table {...props} data={updatedData} config={updatedConfig} />
        </Temp>
      );
    };
    
    export default SortableTable;
    `
  },
    {
    table:`import { Fragment } from "react";

    const Table = ({ config, data, handleKey }) => {
      const headings = config.map((heading) => {
        if (!heading.header) {
          return (
            <th className="border-b-2 border-grey-900 px-2 m-2" key={heading.label}>
              {heading.label}
            </th>
          );
        }
        return <Fragment key={heading.label}>{heading.header(heading)}</Fragment>;
      });
    
      const tableData = data.map((data) => {
        const values = config.map((value) => {
          return (
            <td className="ps-4 pt-2" key={value.render(data)}>
              {value.render(data)}
            </td>
          );
        });
    
        return (
          <tr className="border-b bg-white even:bg-gray-100 border-grey-900 text-center hover:bg-blue-200 transition duration-1000 ease-out " key={handleKey(data)}>
            {values}
          </tr>
        );
      });
    
      return (
        <div className="p-4 ">
          <table>
            <thead className="border-b-2 border-grey-900 px-3">
              <tr className="bg-slate-950 text-white uppercase">{headings}</tr> 
            </thead>
            <tbody>{tableData}</tbody>
          </table>
        </div>
      );
    };
    
    export default Table;
    `,
    sortTable:`import { useState } from "react";
    import Table from "./Table2";
    import { TiArrowUnsorted } from "react-icons/ti";
    import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
    import { styled } from "styled-components";
    
    const Temp=styled.div\`
    .tableHeader:hover .sortIcons{
        opacity: 1;
        transition: all 0.3s;
    }
    
    .tableHeader{
        cursor: pointer;
    }   
    \`;
    
    
    const SortableTable = (props) => {
      const { config, data } = props;
      const [sortBy, setSortBy] = useState(null);
      const [sortOrder, setSortOrder] = useState(null);
    
      const handleSortBy = (label) => {
        if (label !== sortBy) {
          setSortOrder("asc");
          setSortBy(label);
          return;
        }
        setSortBy(label);
        handleSortOrder();
      };
      const handleSortOrder = () => {
        if (sortOrder === null) {
          setSortOrder("asc");
        } else if (sortOrder === "asc") {
          setSortOrder("desc");
        } else {
          setSortOrder(null);
        }
      };
    
      let updatedData = data;
    
      if (sortBy && sortOrder) {
        const { sortValue } = config.find((column) => column.label === sortBy);
    
        updatedData = [...data].sort((a, b) => {
          const valueA = sortValue(a);
          const valueB = sortValue(b);
    
          const reverseOrder = sortOrder === "asc" ? 1 : -1;
          if (typeof valueA === "string") {
            return valueA.localeCompare(valueB) * reverseOrder;
          } else {
            return (valueA - valueB) * reverseOrder;
          }
        });
      }
    
      const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
          return column;
        } else {
          if (!column.header) {
            return {
              ...column,
              header: () => {
                return (
                  <th onClick={() => handleSortBy(column.label)} key={column.label}>
                    <div className="tableHeader flex px-2 m-2">
                      {handleIcon(column.label, sortBy, sortOrder)}
                      {column.label}
                    </div>
                  </th>
                );
              },
            };
          }
    
          return {
            ...column,
            header: () => {
              return (
                <th onClick={() => handleSortBy(column.label)} key={column.label}>
                  <div className="tableHeader flex items-center px-2 m-2">
                    {handleIcon(column.label, sortBy, sortOrder)}
                    {column.header(column)}
                  </div>
                </th>
              );
            },
          };
        }
      });
    
      const handleIcon = (label, sortBy, sortOrder) => {
        if (label !== sortBy) {
          return <TiArrowUnsorted className="sortIcons opacity-0" />;
        }
        if (sortOrder === "asc") {
          return <RxTriangleUp className="sortIcons opacity-0" />;
        } else if (sortOrder === "desc") {
          return <RxTriangleDown className="sortIcons opacity-0" />;
        } else if (sortOrder === null) {
          return <TiArrowUnsorted className="sortIcons opacity-0" />;
        }
      };
    
      return (
        <Temp>
          <Table {...props} data={updatedData} config={updatedConfig} />
        </Temp>
      );
    };
    
    export default SortableTable;
    `
  },
    {
    table:`import { Fragment } from "react";

    const Table = ({ config, data, handleKey }) => {
        const headings = config.map((heading) => {
            if (!heading.header) {
                return (
                    <th className="py-2 px-3 " key={heading.label}>
                        {heading.label}
                    </th>
                );
            }
            return <Fragment key={heading.label}>{heading.header(heading)}</Fragment>;
        });
    
        const tableData = data.map((data) => {
            const values = config.map((value) => {
                return (
                    <td className="ps-4 py-4 pr-10" key={value.render(data)}>
                        {value.render(data)}
                    </td>
                );
            });
    
            return (
                <tr className="border-b border-x border-white/30 text-left" key={handleKey(data)}>
                    {values}
                </tr>
            );
        });
    
        return (
            <div className="p-4 bg-gradient-to-r from-[#22C383] to-[#23B6C2] max-w-fit">
                <table className="text-white">
                    <thead className="px-3">
                        <tr className="backdrop-blur-sm bg-white/30 uppercase text-white">{headings}</tr>
                    </thead>
                    <tbody className="uppercase text-xs">{tableData}</tbody>
                </table>
            </div>
        );
    };
    
    export default Table;
    `,
    sortTable:`import { useState } from "react";
    import Table from "./Table3";
    import { TiArrowUnsorted } from "react-icons/ti";
    import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
    import { styled } from "styled-components";
    
    const Temp=styled.div\`
    .tableHeader:hover .sortIcons{
        opacity: 1;
        transition: all 0.3s;
    }
    
    .tableHeader{
        cursor: pointer;
    }   
    \`;
    
    
    const SortableTable = (props) => {
      const { config, data } = props;
      const [sortBy, setSortBy] = useState(null);
      const [sortOrder, setSortOrder] = useState(null);
    
      const handleSortBy = (label) => {
        if (label !== sortBy) {
          setSortOrder("asc");
          setSortBy(label);
          return;
        }
        setSortBy(label);
        handleSortOrder();
      };
      const handleSortOrder = () => {
        if (sortOrder === null) {
          setSortOrder("asc");
        } else if (sortOrder === "asc") {
          setSortOrder("desc");
        } else {
          setSortOrder(null);
        }
      };
    
      let updatedData = data;
    
      if (sortBy && sortOrder) {
        const { sortValue } = config.find((column) => column.label === sortBy);
    
        updatedData = [...data].sort((a, b) => {
          const valueA = sortValue(a);
          const valueB = sortValue(b);
    
          const reverseOrder = sortOrder === "asc" ? 1 : -1;
          if (typeof valueA === "string") {
            return valueA.localeCompare(valueB) * reverseOrder;
          } else {
            return (valueA - valueB) * reverseOrder;
          }
        });
      }
    
      const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
          return column;
        } else {
          if (!column.header) {
            return {
              ...column,
              header: () => {
                return (
                  <th onClick={() => handleSortBy(column.label)} key={column.label}>
                    <div className="tableHeader flex items-center">
                      {handleIcon(column.label, sortBy, sortOrder)}
                      {column.label}
                    </div>
                  </th>
                );
              },
            };
          }
    
          return {
            ...column,
            header: () => {
              return (
                <th onClick={() => handleSortBy(column.label)} key={column.label}>
                  <div className="tableHeader flex items-center">
                    {handleIcon(column.label, sortBy, sortOrder)}
                    {column.header(column)}
                  </div>
                </th>
              );
            },
          };
        }
      });
    
      const handleIcon = (label, sortBy, sortOrder) => {
        if (label !== sortBy) {
          return <TiArrowUnsorted className="sortIcons opacity-0" />;
        }
        if (sortOrder === "asc") {
          return <RxTriangleUp className="sortIcons opacity-0" />;
        } else if (sortOrder === "desc") {
          return <RxTriangleDown className="sortIcons opacity-0" />;
        } else if (sortOrder === null) {
          return <TiArrowUnsorted className="sortIcons opacity-0" />;
        }
      };
    
      return (
        <Temp>
          <Table {...props} data={updatedData} config={updatedConfig} />
        </Temp>
      );
    };
    
    export default SortableTable;
    `
  },
]

  const renderElements = tableElements.map((table) => {
    const handleCopyTable=()=>{
      navigator.clipboard.writeText(tableScript[table.id].table);
    }
    const handleCopySort=()=>{
      navigator.clipboard.writeText(tableScript[table.id].sortTable);
    }
    return (
      <div className="shadow-[0_3px_8px_rgb(0,0,0,0.24)] hover:shadow-xl transition-shadow border-1 p-2 my-4 max-w-fit" key={table.id}>
        {table.element}
        <div className='grid my-auto '>
        <button onClick={handleCopyTable}  className='font-bold border-2 text-green-700 border-green-700 rounded p-2 m-2 active:shadow-xl  hover:bg-green-700 hover:text-white max-h-fit'>Copy Table</button>
        <button onClick={handleCopySort} className='font-bold border-2 text-green-700 border-green-700 rounded p-2 m-2 active:shadow-xl  hover:bg-green-700 hover:text-white max-h-fit'>Copy Sortable Table</button>
        </div>
      </div>
    );

  });

  const renderCode=`
  import Table from './Elements';
  const config = [
      { label: "No.", render: (obj) => obj.id },
      {
        label: "Fruit",            
        render: (obj) => obj.name,  
        header: (obj) => {
         // Function to customize the Header ( it is optional ) 
          return (
            <div className="text-red-700">
              {obj.label}
            </div>
          );
        },
        sortValue: (obj) => obj.name, // this property can only be utilized in sortable table.
      },
      { label: "Count", render: (obj) => obj.count, sortValue: (obj) => obj.count },
      { label: "Quality", render: (obj) => obj.quality },
    ];
  
  const data=[{ id: "1", name: "Apple", count: "2", quality: "Good" },
              { id: "2", name: "Orange", count: "5", quality: "Very good" },
              { id: "3", name: "Peach", count: "3", quality: "Fine" }]
  
  const handleKey = (obj) => {
      return obj.id;
  };
  
  return(
      < ... >
      <Table config={config} data={data} handleKey={handleKey} />
    );`

  return (
    <div className=" w-screen md:relative md:pt-[10px] pt-[20px] z-0">
      <div className="md:w-4/5 md:absolute md:right-0 px-4 py-4 text-center md:text-left">
        <header className="text-3xl font-bold mb-4">Table</header>
        <h1 className='text-xl font-semibold underline '>How to Use: </h1>
        <p className='my-4 mb-16'>
          Copy the code of selected Table Element. Create a new Element in React Project using copied code. Import element with any name and pass following Props through the Table Component:
          <div className='ms-4'>
            <heading className='font-bold underline text-lg'>Props</heading>
            <ul className='list-disc ms-4'>
              <li>
                <span className='font-semibold hover:text-blue-700 hover:underline'>config</span><span> : Array of objects which render Column Headers of table. Object contain three values(label,render,header,sortValue).
                  <ol className="list-decimal ps-4">
                    <li><span>label</span> : Name of column header.</li>
                    <li><span>render</span> : Function for what values to render from data array in this column.</li>
                    <li><span>header</span> : It is optional property. Use to style the particular header.</li>
                    <li><span>sortValue</span> : If you are using sortable table than you need to define this to make a column sortable with logic define in a function .</li>
                  </ol>
                </span>
              </li>
              <li>
                <span className='font-semibold hover:text-blue-700 hover:underline'>data</span><span> : Array of objects, all values in a row are contain in a object.</span>
              </li>
              <li>
                <span className='font-semibold hover:text-blue-700 hover:underline'>handleKey</span><span> : function to give unique id to every row. It is necessary to be unique.</span>
              </li>
            </ul>
            <p><span className='font-semibold'>Note :</span>To use sortable table, both table element need to be copied, as well as user need to update the import path in sortable table component.</p>
            <div>

              <heading>Example: </heading>
              <SyntaxHighlighter language="jsx" style={atomDark} useInlineStyles className="rounded-xl my-8 ">
                  {renderCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </p>
        <heading className='font-semibold text-2xl underline '>Available Components: </heading>
        <div className='md:grid md:grid-cols-2 justify-items-center  gap-2 my-8'>
          {renderElements}
        </div>
      </div>
    </div>
  );
};

export default TablePage;
