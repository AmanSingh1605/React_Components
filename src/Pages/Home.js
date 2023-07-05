const Home = () => {
    return <div className="w-screen md:relative md:pt-[10px] pt-[20px] z-0 whitespace-pre-wrap">
        <div className="md:w-4/5 md:absolute md:right-0 px-4 py-4 md:text-left pe-12">
            <h1 className="text-4xl font-semibold">React Components</h1>
            <p className="my-8">Discover the power of customizable React components tailored to meet your project's needs. Our website offers components ,designed to streamline your development process. With our components, you can effortlessly integrate advanced functionality into your web applications while maintaining a clean and elegant user interface. </p>
            <div>
                <h1 className="text-2xl font-semibold">
                    How to Get Started:
                </h1>
                <ol className="my-4 list-decimal ps-4 mb-8">
                    <li className="mb-2"><span className="text-md text-blue-900 font-semibold">Explore our Component Library:</span> Browse through our extensive collection of components, each accompanied by detailed descriptions and previews, to find the perfect fit for your project.</li>
                    <li className="mb-2"><span className="text-md text-blue-900 font-semibold">Copy the Code Snippets:</span> Once you've found the desired component, simply copy the provided code snippet. You can easily modify the component's appearance and behavior by passing your data as props.</li>
                    <li className="mb-2"><span className="text-md text-blue-900 font-semibold">Integrate into Your Project:</span> Paste the code snippet into your React project and configure the component as needed. Enjoy the benefits of powerful and feature-rich components that seamlessly blend with your existing codebase.</li>
                    <li className="mb-2"><span className="text-md text-blue-900 font-semibold">Customize and Enhance:</span> Feel free to experiment and customize the components further to match your project's unique requirements. With Reactify Components, you have the freedom to create stunning interfaces that engage and delight your users.</li>
                </ol>
            </div>
            <div>
                <h1 className="text-2xl font-semibold">
                    Dependencies:
                </h1>
                <p className="my-2 mt-4">To make the most of Reactify Components and utilize all its features, you'll need to install a few additional libraries. Here are the necessary dependencies:</p>
                <ol className="list-decimal my-2 ps-4">
                    <li className="py-1"><span className="text-md text-blue-900 font-semibold">Tailwind CSS:</span> Tailwind CSS is a utility-first CSS framework that enables you to rapidly build custom user interfaces. To install Tailwind CSS, use the following command:<div className=" bg-[#011627] text-[#d6deeb] p-4 my-4 rounded-lg font-['Fira_Code']">npm install -D tailwindcss{"\n"}npx tailwindcss init</div></li>
                    <li className="py-1"><span className="text-md text-blue-900 font-semibold">Styled Components: </span> Styled Components is a popular library that allows you to write CSS within your JavaScript code.To install Styled Components, use the following command:<div className=" bg-[#011627] text-[#d6deeb] p-4 my-4 rounded-lg font-['Fira_Code']">npm install styled-components</div></li>
                    <li className="py-1"><span className="text-md text-blue-900 font-semibold">React Icons:</span>React Icons is a library that provides a vast collection of customizable icons for your React projects. To install React Icons, use the following command:<div className=" bg-[#011627] text-[#d6deeb] p-4 my-4 rounded-lg font-['Fira_Code']">npm install react-icons</div></li>
                    <li className="py-1"><span className="text-md text-blue-900 font-semibold">React Transition Group:</span>React Transition Group is a library that facilitates the creation of smooth and fluid transitions for your React components. To install React Transition Group, use the following command:<div className=" bg-[#011627] text-[#d6deeb] p-4 my-4 rounded-lg font-['Fira_Code']">npm install react-transition-group</div></li>
                </ol>
            </div>
            <p className="pb-2">Once you have installed these libraries, you can import them into your project and start using React Components seamlessly.</p>
            <p className="pb-2">Make sure to follow the documentation and usage guidelines provided with each library to leverage their full potential and enhance your React development experience.</p>
            <p className="pb-2">Happy coding with React Components and these powerful libraries!</p>
        </div>
    </div>
}

export default Home;