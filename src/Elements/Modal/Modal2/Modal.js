import classNames from "classnames";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ buttons, children }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const buttonList = buttons.map((button) => {
    const styling = classNames("border px-2 m-2", button.custom);
    return (
      <button className={styling} onClick={button.to} key={button.label}>
        {button.label}
      </button>
    );
  });
  return ReactDOM.createPortal(
    <div className="">
      <div className="fixed inset-0 bg-neutral-300 opacity-80"></div>
      <div className="fixed inset-40 md:inset-x-80 md:inset-y-60 bg-white p-2 max-w-lg min-h-max rounded-bl-lg rounded-tr-lg bg-gradient-to-tr from-[#fff] to-[#E6F1EA]">
        <div className="flex flex-col justify-between md:h-full ">
          {children}
          <div className="flex justify-end ">{buttonList}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal")
  );
};

export default Modal;
