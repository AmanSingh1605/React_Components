import { Fragment } from "react";

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
