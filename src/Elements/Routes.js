import { useContext } from "react";
import NavigationContext from "../Context/Navigation";

const Routes = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);
  if (currentPath === path) {
    return children;
  }
  return null;
};

export default Routes;
