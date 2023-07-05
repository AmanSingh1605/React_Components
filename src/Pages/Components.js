import Links from "../Elements/Links";
import { BsArrowUpRight } from "react-icons/bs"
const Components = () => {
    return <div className="w-screen md:relative md:pt-[10px] pt-[20px] z-0 whitespace-pre-wrap">
        <div className="md:w-4/5 md:absolute md:right-0 px-4 py-4 md:text-left pe-12">
            <heading className="text-3xl mb-2 font-semibold">Components: </heading>
            <p className="my-2 pr-10"> The site is currently under construction and undergoing constant updates. As a solo developer, I am dedicated to providing you with the best possible experience by developing a wide range of powerful React components.</p>
            <p>Thank you for your interest in my website, and I look forward to bringing you even more dynamic and feature-rich components in the near future.</p>
            <p className="text-lg text-red-700 my-4">Currently Following Components are Available:</p>
            <div>
                <Links to="/Buttons" hover="font-semibold hover:text-blue-700" ><BsArrowUpRight className="text-sm" /> Buttons </Links>
                <Links to="/AccordionPage" hover="font-semibold hover:text-blue-700"><BsArrowUpRight className="text-sm" /> Accordion </Links>
                <Links to="/DropMenuPage" hover="font-semibold hover:text-blue-700" ><BsArrowUpRight className="text-sm" /> DropDown Menu </Links>
                <Links to="/TablePage" hover="font-semibold hover:text-blue-700" ><BsArrowUpRight className="text-sm" /> Tables </Links>
            </div>
        </div>
    </div>;
}

export default Components;