import { useState } from "react";
import Modal from "./Modal";

const RenderModal = () => {
    const [isModal, setIsModal] = useState(false);
    const buttonList = [
        {
            label: "Accept",
            to: () => {
                setIsModal(false);
            },
            custom: "border-green-700 hover:bg-green-500 hover:text-white",
        },
        {
            label: "Deny",
            to: () => {
                setIsModal(false);
            },
            custom: "border-red-700 hover:bg-red-500 hover:text-white",
        },
    ];


    const handleClick = () => {
        setIsModal(true);
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className="border-2 border-neutral-900 px-2 my-4"
            >
                Modal Example
            </button>
            {isModal && (
                <Modal buttons={buttonList}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo debitis explicabo animi similique laboriosam ut, praesentium soluta, commodi excepturi eligendi adipisci, omnis obcaecati maiores cum laudantium accusamus alias corporis earum.</Modal>
            )}
        </div>
    )};

export default RenderModal;
