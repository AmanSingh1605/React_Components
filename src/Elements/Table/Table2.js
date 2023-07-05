import { Fragment } from "react";

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
