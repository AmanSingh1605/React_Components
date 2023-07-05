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
      <div className="fixed md:inset-60 inset-40 bg-white rounded p-2 min-w-max min-h-max ">
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
