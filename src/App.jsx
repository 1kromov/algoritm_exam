// App.jsx
import React, { useState } from "react";
import Footer from "./Window";
import Header from "./Header1";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("Level");

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    console.log("Selected Option:", selectedValue);
    setSelectedOption(selectedValue);
  };

  return (
    <div className="">
      <Header />
      <main className="flex-1 overflow-y-auto p-4  z-0">
        <div className="container  flex justify-between items-center  fixed top-20 w-full bg-[#222841] p-4 z-20">
          <nav className="text-lg">
            <a className=" text-yellow-400 p-4 hover:underline" href="#home">
              Ismingizni kiriting
            </a>
            <input
              className="rounded-md border-none text-black focus:outline-slate-500"
              type="text"
              placeholder="Toliq ismingizni kiriting"
            />
          </nav>
          <select
            className="p-2 rounded-md bg-slate-500 text-black focus:outline-slate-500 "
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option>Level</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>JS</option>
            <option>React</option>
          </select>
          <select className="p-2 rounded-md bg-slate-500 text-black focus:outline-slate-500 ">
            <option>Mentor</option>
            <option>Azimjon</option>
            <option>Boburjon</option>
            <option>Jahongir</option>
          </select>
        </div>
      </main>
      {selectedOption !== "Level" && <Footer />}
    </div>
  );
};

export default App;

