import { useEffect, useState } from "react";

//styling button variable
const Buttons = () => {
  const [myStyle, setMyStyle] = useState({
    color: "",
    backgroundColor: "",
    border: "",
    borderRadius: "",
    padding: "",
  });

  //Button variables states
  const [textColor, setTextColor] = useState("FFFFFF");
  const [bgColor, setBgColor] = useState("000000");
  const [borderColor, setBorderColor] = useState("000000");
  const [width, setWidth] = useState("1");
  const [radius, setRadius] = useState("0");
  const [PaddingX, setPaddingX] = useState("0");
  const [PaddingY, setPaddingY] = useState("0");
  const [copyText, setCopyText] = useState("");
  const [copyButtonLabel, setCopyButtonLabel] = useState("Copy Style");

  //input States
  const handleTextColor = (event) => {
    const color = event.target.value;
    setTextColor(color);
  };
  const handleBgColor = (event) => {
    const color = event.target.value;
    setBgColor(color);
  };
  const handleBorderColor = (event) => {
    const color = event.target.value;
    setBorderColor(color);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleCopyButton = async () => {
    navigator.clipboard.writeText(copyText);
    setCopyButtonLabel("Copied!!!");
    await delay(1500);
    setCopyButtonLabel("Copy Style");
  };

  useEffect(() => {
    setMyStyle({
      color: `#${textColor}`,
      backgroundColor: `#${bgColor}`,
      border: `${width}px solid #${borderColor}`,
      borderRadius: `${radius}px`,
      padding: `${PaddingY}px ${PaddingX}px`,
    });
    setCopyText(` color: #${textColor};
    backgroundColor: #${bgColor};
    border: ${width}px solid #${borderColor};
    borderRadius: ${radius}px;
    padding: ${PaddingY}px ${PaddingX}px;`);
  }, [PaddingX, PaddingY, textColor, bgColor, borderColor, width, radius]);

  return (
    <div className=" w-screen md:relative md:pt-[10px] pt-[20px]">
      <div className="md:w-4/5 md:absolute md:right-0 px-4 py-4 text-center md:text-left">
        <header className="text-3xl font-bold mb-4">Button Styling</header>
        <div className="flex md:flex-row flex-col-reverse">
          <div>
            <div className="my-5 text-start">
              <p className="font-bold text-xl">Text-Color:</p>
              <form className="ms-4" onSubmit={handleSubmit}>
                <input
                  type="radio"
                  value="0D6FFC"
                  onChange={(event) => setTextColor(event.target.value)}
                  name="text-color"
                  id="PrimaryText"
                />
                <label
                  htmlFor="PrimaryText"
                  className="text-blue-700 font-bold"
                >
                  Primary
                </label>
                <input
                  type="radio"
                  value="6D747D"
                  onChange={(event) => setTextColor(event.target.value)}
                  name="text-color"
                  id="SecondaryText"
                />
                <label
                  htmlFor="SecondaryText"
                  className="text-slate-700 font-bold"
                >
                  Secondary
                </label>
                <input
                  type="radio"
                  value="DC3545"
                  onChange={(event) => setTextColor(event.target.value)}
                  name="text-color"
                  id="DangerText"
                />
                <label htmlFor="DangerText" className="text-red-700 font-bold">
                  Danger
                </label>
                <input
                  type="radio"
                  value="FFC006"
                  onChange={(event) => setTextColor(event.target.value)}
                  name="text-color"
                  id="WarningText"
                />
                <label
                  htmlFor="WarningText"
                  className="text-yellow-700 font-bold"
                >
                  Warning
                </label>
                <input
                  type="radio"
                  value="0DCAF0"
                  onChange={(event) => setTextColor(event.target.value)}
                  name="text-color"
                  id="InfoText"
                />
                <label htmlFor="InfoText" className="text-teal-500 font-bold">
                  Info
                </label>
                <br />
                <div className="inline-block my-3">
                  <label htmlFor="customText">Custom</label>
                  <input
                    type="text"
                    id="customText"
                    onChange={handleTextColor}
                    value={textColor}
                    placeholder="hex code"
                    className=" px-2 py-1 bg-slate-300 rounded-md border-2 border-slate-500 "
                  />
                </div>
              </form>
            </div>
            <div className="my-5 text-start">
              <p className="font-bold text-xl">Background Color:</p>
              <form className="ms-4" onSubmit={handleSubmit}>
                <input
                  type="radio"
                  value="0D6FFC"
                  onChange={(e) => setBgColor(e.target.value)}
                  name="bg-color"
                  id="PrimaryBg"
                />
                <label htmlFor="PrimaryBg" className="text-blue-700 font-bold">
                  Primary
                </label>
                <input
                  type="radio"
                  value="6D747D"
                  onChange={(e) => setBgColor(e.target.value)}
                  name="bg-color"
                  id="SecondaryBg"
                />
                <label
                  htmlFor="SecondaryBg"
                  className="text-slate-700 font-bold"
                >
                  Secondary
                </label>
                <input
                  type="radio"
                  value="DC3545"
                  onChange={(e) => setBgColor(e.target.value)}
                  name="bg-color"
                  id="DangerBg"
                />
                <label htmlFor="DangerBg" className="text-red-700 font-bold">
                  Danger
                </label>
                <input
                  type="radio"
                  value="FFC006"
                  onChange={(e) => setBgColor(e.target.value)}
                  name="bg-color"
                  id="WarningBg"
                />
                <label
                  htmlFor="WarningBg"
                  className="text-yellow-700 font-bold"
                >
                  Warning
                </label>
                <input
                  type="radio"
                  value="0DCAF0"
                  onChange={(e) => setBgColor(e.target.value)}
                  name="bg-color"
                  id="InfoBg"
                />
                <label htmlFor="InfoBg" className="text-teal-500 font-bold">
                  Info
                </label>
                <br />
                <div className="inline-block my-3">
                  <label htmlFor="customBg">Custom</label>
                  <input
                    type="text"
                    id="customBg"
                    onChange={handleBgColor}
                    value={bgColor}
                    placeholder="hex code"
                    className=" px-2 py-1 bg-slate-300 rounded-md border-2 border-slate-500 "
                  />
                </div>
              </form>
            </div>
            <div className="my-5 text-start">
              <p className="font-bold text-xl">Border Properties:</p>
              <p className="ms-2 font-bold">Color:</p>
              <form className="ms-4" onSubmit={handleSubmit}>
                <input
                  type="radio"
                  value="0D6FFC"
                  onChange={(event) => {
                    setBorderColor(event.target.value);
                  }}
                  name="border-color"
                  id="Primary"
                />
                <label htmlFor="Primary" className="text-blue-700 font-bold">
                  Primary
                </label>
                <input
                  type="radio"
                  value="6D747D"
                  onChange={(event) => {
                    setBorderColor(event.target.value);
                  }}
                  name="border-color"
                  id="Secondary"
                />
                <label htmlFor="Secondary" className="text-slate-700 font-bold">
                  Secondary
                </label>
                <input
                  type="radio"
                  value="DC3545"
                  onChange={(event) => {
                    setBorderColor(event.target.value);
                  }}
                  name="border-color"
                  id="Danger"
                />
                <label htmlFor="Danger" className="text-red-700 font-bold">
                  Danger
                </label>
                <input
                  type="radio"
                  value="FFC006"
                  onChange={(event) => {
                    setBorderColor(event.target.value);
                  }}
                  name="border-color"
                  id="Warning"
                />
                <label htmlFor="Warning" className="text-yellow-700 font-bold">
                  Warning
                </label>
                <input
                  type="radio"
                  value="0DCAF0"
                  onChange={(event) => {
                    setBorderColor(event.target.value);
                  }}
                  name="border-color"
                  id="Info"
                />
                <label htmlFor="Info" className="text-teal-500 font-bold">
                  Info
                </label>
                <br />
                <div className="inline-block my-3">
                  <label htmlFor="custom">Custom</label>
                  <input
                    type="text"
                    id="custom"
                    onChange={handleBorderColor}
                    value={borderColor}
                    placeholder="hex code"
                    className=" px-2 py-1 bg-slate-300 rounded-md border-2 border-slate-500 "
                  />
                </div>
              </form>
              <div className="ms-4 w-[300px] flex flex-row flex-wrap">
                <form
                  className="my-3 basis-1/2"
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <label htmlFor="border-width" className="mr-5 font-bold">
                    Width
                  </label>
                  <br />
                  <input
                    type="number"
                    id="border-width"
                    onChange={(event) => setWidth(event.target.value)}
                    value={width}
                    placeholder="in pixels"
                    min="0"
                    className=" px-2 py-1 bg-slate-300 rounded-md border-2 border-slate-500 w-20"
                  />
                </form>
                <form
                  className="my-3 basis-1/2"
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <label htmlFor="border-radius" className="mr-4 font-bold">
                    Radius
                  </label>
                  <br />
                  <input
                    type="number"
                    id="border-radius"
                    onChange={(event) => setRadius(event.target.value)}
                    value={radius}
                    placeholder="in pixels"
                    min="0"
                    className="w-20 px-2 py-1 bg-slate-300 rounded-md border-2 border-slate-500 "
                  />
                </form>
                <form
                  className="my-3 basis-1/2"
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <label htmlFor="padding-x" className="mr-4 font-bold">
                    Padding(x-axis)
                  </label>
                  <input
                    type="number"
                    id="padding-x"
                    onChange={(event) => setPaddingX(event.target.value)}
                    value={PaddingX}
                    placeholder="in pixels"
                    min="0"
                    className="w-20 px-2 py-1 bg-slate-300 rounded-md border-2 border-slate-500 "
                  />
                </form>
                <form
                  className="my-3 basis-1/2"
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <label htmlFor="padding-y" className="mr-4 font-bold">
                    Padding(y-axis)
                  </label>
                  <input
                    type="number"
                    id="padding-y"
                    onChange={(event) => setPaddingY(event.target.value)}
                    value={PaddingY}
                    placeholder="in pixels"
                    min="0"
                    className="w-20 px-2 py-1 bg-slate-300 rounded-md border-2 border-slate-500 "
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-center self-center md:items-center md:flex-1">
            <div className="border border-2 md:w-72 w-48 md:h-72 h-48 flex justify-center items-center rounded-xl relative">
              <button style={myStyle}>Button</button>
              <div
                className="absolute right-2 bottom-1 cursor-pointer md:hover:font-bold text-neutral-600 "
                onClick={handleCopyButton}
              >
                {copyButtonLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
