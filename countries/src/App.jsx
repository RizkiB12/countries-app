function App() {
  return (
    <div className="grid grid-cols-1 gap-5">
      {/* Navbar */}
      <div className="flex flex-col min-h-screen p-5 bg-gray-200 w-full lg:w-1/3 md:w-1/2 justify-self-center">
        <div className="mb-auto space-y-5">
          <div className="flex justify-between items-center sticky top-0 bg-white -m-5 px-5 py-5 mb-5 drop-shadow-md">
            <div className="font-semibold">Countries</div>
            <div>
              <img src={`https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png`} alt="people" className="rounded-full w-8 h-8 bg-gradient-to-t from-green-600 to-green-400 cursor-pointer" />
            </div>
          </div>
          <div className="mt-5 pb-10 -mb-2 flex justify-center">
            <div className="text-[8px] opacity-50 text-center">
              <div>Ⓒ Copyright 2023 - All rights reserved</div>
              <div>Made with ♡ and 🔥 by RizkiB.</div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  );
}

export default App;
