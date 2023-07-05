import { useState } from "react";
import Table from "./Table3";
import { TiArrowUnsorted } from "react-icons/ti";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import "../CSS/Table.css"

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
    <div>
      <Table {...props} data={updatedData} config={updatedConfig} />
    </div>
  );
};

export default SortableTable;
