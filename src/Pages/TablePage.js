import SortableTable1 from "../Elements/Table/SortableTable1";
import SortableTable2 from "../Elements/Table/SortableTable2";
import SortableTable3 from "../Elements/Table/SortableTable3";

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

  return (
    <div className=" w-screen md:relative md:pt-[10px] pt-[20px] z-0">
      <div className="md:w-4/5 md:absolute md:right-0 px-4 py-4 text-center md:text-left">
        <header className="text-3xl font-bold mb-4">Table</header>
        <div className="">
          <SortableTable1 config={config} data={data} handleKey={handleKey} />
          <SortableTable2 config={config} data={data} handleKey={handleKey} />
          <SortableTable3 config={config} data={data} handleKey={handleKey} />
        </div>
      </div>
    </div>
  );
};

export default TablePage;
