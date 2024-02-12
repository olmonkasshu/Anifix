export default function Card() {
    return (
        <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] w-52 m-5">
            <img class="w-80 h-auto rounded-t-xl" src="src/assets/wallhaven-72lqme.png" alt="Image Description"/>
            <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Card title
            </h3>
            
            <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                Go somewhere
            </a>
            </div>
      </div>
    );
  }