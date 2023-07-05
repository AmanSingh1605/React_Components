import RenderModal1 from "../Elements/Modal/Modal1/RenderModal";
import RenderModal2 from "../Elements/Modal/Modal2/RenderModal";
import RenderModal3 from "../Elements/Modal/Modal3/RenderModal";


const ModalPage = () => {

  return (
    <div className=" w-screen md:relative md:pt-[10px] pt-[20px] z-0">
      <div className="md:w-4/5 md:absolute md:right-0 px-4 py-4 text-center md:text-left">
        <header className="text-3xl font-bold mb-4">Modal</header>
        <RenderModal1 />
        <RenderModal2 />
        <RenderModal3 />
      </div>
    </div>
  );
};

export default ModalPage;
