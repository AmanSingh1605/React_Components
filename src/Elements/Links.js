import { useContext } from "react";
import NavigationContext from "../Context/Navigation";
import classNames from "classnames";

const Links = ({ to, children, active,hover }) => {
  const { navigate, currentPath } = useContext(NavigationContext);

  const styling = classNames(
    "mb-4 cursor-pointer flex items-center",
    currentPath === to && active,
    currentPath !== to && "text-neutral-700",
    hover
  );
  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <div className={styling} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Links;
