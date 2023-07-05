import { Fragment } from "react";

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
