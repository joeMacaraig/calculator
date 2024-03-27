import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen max-w-md mx-auto bg-black">
      {/* display */}
      <div className="h-[40vh] text-white flex justify-end items-end p-4 text-4xl">
        1,000
      </div>
      <div className="grid grid-cols-6 border p-2 gap-2">
        <div className="hover:bg-white/50 text-xl flex items-center justify-center w-[65px]  h-[65px]  bg-slate-300 rounded-full m-1">
          AC
        </div>
        <div className="hover:bg-white/50 text-xl flex items-center justify-center w-[65px]  h-[65px]  bg-slate-300 rounded-full m-1">
          +/-
        </div>
        <div className="hover:bg-white/50 text-xl flex items-center justify-center w-[65px]  h-[65px]  bg-slate-300 rounded-full m-1">
          %
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-orange-400 rounded-full m-1">
          ÷
        </div>
        <div className="hover:bg-white/50 text-lg text-white flex items-center justify-center h-[65px]  bg-zinc-600 rounded-full col-span-2 w-full">
          Tip 25%
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-zinc-600 rounded-full m-1">
          7
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-zinc-600 rounded-full m-1">
          8
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-zinc-600 rounded-full m-1">
          9
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-orange-400 rounded-full m-1">
          x
        </div>
        <div className="hover:bg-white/50 text-lg text-white flex items-center justify-center h-[65px]  bg-zinc-600 rounded-full col-span-2 w-full">
          Tip 20%
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-zinc-600 rounded-full m-1">
          4
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-zinc-600 rounded-full m-1">
          5
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-zinc-600 rounded-full m-1">
          6
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-orange-400 rounded-full m-1">
          -
        </div>
        <div className="hover:bg-white/50 text-lg text-white flex items-center justify-center h-[65px]  bg-zinc-600 rounded-full col-span-2 w-full">
          Tip 15%
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-zinc-600 rounded-full m-1">
          1
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-zinc-600 rounded-full m-1">
          2
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-zinc-600 rounded-full m-1">
          3
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-orange-400 rounded-full m-1">
          +
        </div>
        <div className="hover:bg-white/50 text-lg text-white flex items-center justify-center h-[65px]  bg-zinc-600 rounded-full col-span-2 w-full">
          Tip 10%
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex  justify-start items-center p-8 h-[65px]  bg-zinc-600 rounded-full col-span-2 w-full">
          0
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-zinc-600 rounded-full m-1">
          .
        </div>
        <div className="hover:bg-white/50 text-xl text-white flex items-center justify-center w-[65px]  h-[65px]  bg-orange-400 rounded-full m-1">
          =
        </div>
        <div className="hover:bg-white/50 text-lg text-white flex items-center justify-center h-[65px]  bg-zinc-600 rounded-full col-span-2 w-full">
          Custom Tip
        </div>
      </div>
    </main>
  );
}
