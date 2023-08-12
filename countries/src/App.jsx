import List from "./components/List";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

function App() {
  return (
    <div className="grid grid-cols-1 gap-5">
      {/* Navbar */}
      <div className="flex flex-col min-h-screen p-5 bg-gray-200 w-full lg:w-1/3 md:w-1/2 justify-self-center">
        <div className="mb-auto space-y-5">
          <div className="flex justify-between items-center sticky top-0 bg-white -m-5 px-5 py-5 mb-5 drop-shadow-md">
            <div className="font-semibold">Countries</div>
            <div>
              <img src={`https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png`} alt="people" className="rounded-full w-8 h-8  cursor-pointer" />
            </div>
          </div>
          {/* Navbar End */}
          <div className="m-10 flex justify-center">
            <List />
          </div>

          <div className="mt-5 pb-10 -mb-2 flex justify-center">
            <div className="text-[8px] opacity-50 text-center">
              <div>Ⓒ Copyright 2023 - All rights reserved</div>
              <div>Made with 💖 and 🔥 by RizkiB.</div>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center sticky bottom-0 -m-5 px-5 py-4 mt-6 bg-gradient-to-l from-blue-600 to-blue-500 text-white text-xl">
          <AiFillHome className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" />
          <MdDashboard className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" />
          <IoMdListBox className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" />
          <FaUser className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default App;
