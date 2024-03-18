export default function MyCard() {
  return (
    <div className="mx-20">
      <h3 className="ml-5 text-xl font-extrabold  md:ml-4 relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Recommended For You</h3>
      <div className="flex overflow-x-auto">
        <div className="relative w-52 h-auto m-5 hover:opacity-100">
          <img src="src/assets/Poster/1c75ea35d5368be9d117157bf03e03a2_fd5322fc766949a29378bf63fe4036f4.jpg" alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-red-700 opacity-50 p-2 hover:opacity-100">
            <h1 className="text-white font-extrabold z-10 text-xs">Sword Art Online</h1>
          </div>
        </div>

        <div className="relative w-52 h-auto m-5 hover:opacity-100">
          <img src="src/assets/Poster/5d87570c8fec41ee49ce913d67528b06_7d9a56e5b64301d800c4612418eed151.jpg" alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-red-700 opacity-50 p-2 hover:opacity-100">
            <h1 className="text-white font-extrabold z-10 text-xs">Frieren: Beyond Journey's End</h1>
          </div>
        </div>

        <div className="relative w-52 h-auto m-5 hover:opacity-100">
          <img src="src/assets/Poster/94f5c95a58020b06dfd5755c7ab3bb11_6d40346c999498ae4a50ba265c763dda.webp" alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-red-700 opacity-50 p-2 hover:opacity-100">
            <h1 className="text-white font-extrabold z-10 text-xs">The Eminence in Shadow</h1>
          </div>
        </div>

        <div className="relative w-52 h-auto m-5 hover:opacity-100">
          <img src="src/assets/Poster/98ea4464fb90cf523362c83162ebf417_75401c398a26bdbb40455ddcdbdd3287.webp" alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-red-700 opacity-50 p-2 hover:opacity-100">
            <h1 className="text-white font-extrabold z-10 text-xs">The Chainsaw Man</h1>
          </div>
        </div>

        <div className="relative w-52 h-auto m-5 hover:opacity-100">
          <img src="src/assets/Poster/987ebebc89b9dbcdc63648cd99353eeb_e8e002410c75e326f47d94e7bd3d29a6.jpg" alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-red-700 opacity-50 p-2 hover:opacity-100">
            <h1 className="text-white font-extrabold z-10 text-xs">Cyberpunk: Edgerunners</h1>
          </div>
        </div>

        <div className="relative w-52 h-auto m-5 hover:opacity-100">
          <img src="src/assets/Poster/393fc33f0acefd38eb7b71d3c46f8961_c0ea0161d7aff49802ec6667e0ca90d8.webp" alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-red-700 opacity-50 p-2 hover:opacity-100">
            <h1 className="text-white font-extrabold z-10 text-xs">Tokyo Ghoul</h1>
          </div>
        </div>

        <div className="relative w-52 h-auto m-5 hover:opacity-100">
          <img src="src/assets/Poster/70120fec29f4c12b2be37d0c23224631_04a7d819376a3d92cff6722f521629bb.jpg" alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-red-700 opacity-50 p-2 hover:opacity-100">
            <h1 className="text-white font-extrabold z-10 text-xs">Solo Leveling</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
