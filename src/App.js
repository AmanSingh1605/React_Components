import "./App.css";
import Navbar from "./Elements/Navbar";
import Sidebar from "./Elements/Sidebar";
import Buttons from "./Elements/Buttons";
import Routes from "./Elements/Routes";
import AccordionPage from "./Pages/AccordianPage";
import DropMenuPage from "./Pages/DropMenuPage";
import ModalPage from "./Pages/ModalPage";
import TablePage from "./Pages/TablePage";
import Home from "./Pages/Home"
import Components from "./Pages/Components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes path="/">
        <Home />
      </Routes>
      <Routes path="/Components">
        <Components />
      </Routes>
      <Routes path="/Buttons">
        <Buttons />
      </Routes>
      <Routes path="/AccordionPage">
        <AccordionPage />
      </Routes>
      <Routes path="/DropMenuPage">
        <DropMenuPage />
      </Routes>
      <Routes path="/ModalPage">
        <ModalPage />
      </Routes>
      <Routes path="/TablePage">
        <TablePage />
      </Routes>
    </div>
  );
}

export default App;
