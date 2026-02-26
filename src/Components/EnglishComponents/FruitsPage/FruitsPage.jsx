
import Apple from "../../../../public/NewImages/Apple.jpg"
import { GiNetworkBars } from "react-icons/gi";
import { IoMdVolumeHigh } from "react-icons/io";



const FruitsPage = () => {
  return (
 <div className="fruit appContainer p-4 md:p-0">
  {/* Header qismi */}
  <div className="fruitHeader capitalize pt-6">
    <div className="flex items-center justify-between">
      <h3 className="font-bold text-lg">learning fruits</h3>
      <button className="btn bg-white px-3 py-1 rounded-xl font-bold text-[#94a3b8] shadow-sm">
        <span className="text-[#30e830]">4</span>/10
      </button>
    </div>
    <div className="fruitHeader-bottomLine h-2 bg-white rounded-2xl mt-2 overflow-hidden">
      <div className="bottomLineIn bg-[#30e830] rounded-2xl w-[50%] h-2 transition-all duration-500"></div>
    </div>
  </div>

  {/* Main Content: Mobilda ustma-ust, kompyuterda yonma-yon */}
  <div className="fruitMain flex flex-col md:flex-row justify-between mt-6 gap-6">
    
    {/* Chap tomondagi karta (Apple) */}
    <div className="fruitMain-leftCard w-full md:w-[65%] lg:w-[60%] bg-white p-2 rounded-[2rem] flex flex-col shadow-sm">
      <div className="leftCard-top bg-[#dbfce6] min-h-[250px] md:h-auto flex items-center justify-center rounded-[1.8rem] relative">
        <img src={Apple} alt="Apple" className="w-40 h-40 md:w-56 md:h-56 object-contain my-8" />
        <button className="absolute right-6 bottom-6 border-4 border-white h-14 w-14 rounded-full bg-[#30e830] flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform">
          <IoMdVolumeHigh className="text-3xl" />
        </button>
      </div>

      <div className="leftCard-down flex flex-col items-center py-8">
        <h1 className="text-[#0f172a] text-5xl md:text-6xl font-black tracking-tight mb-8">
          Apple
        </h1>

        <div className="w-full flex justify-center items-center gap-6 md:gap-12 mb-6 relative">
          <div className="flex flex-col items-center flex-1">
            <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1 px-2 py-0.5 rounded-lg bg-[#f8fafc]">
              Russian
            </span>
            <span className="text-[#334155] text-xl md:text-2xl font-bold">Яблоко</span>
          </div>

          <div className="h-10 w-px bg-gray-100"></div>

          <div className="flex flex-col items-center flex-1">
            <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest mb-1 px-2 py-0.5 rounded-lg bg-[#f8fafc]">
              Uzbek
            </span>
            <span className="text-[#334155] text-xl md:text-2xl font-bold">Olma</span>
          </div>
        </div>

        <p className="text-gray-400 italic text-lg font-medium text-center px-4">
          "A delicious and crunchy red fruit"
        </p>
      </div>
    </div>

    {/* O'ng tomondagi Progress va Grammar bloklari */}
    <div className="fruitMain-rightCards w-full md:w-[32%] lg:w-[35%] flex flex-col gap-5">
      
      {/* Learning Progress */}
      <div className="rightCards-top p-5 rounded-[2rem] border-t-8 border-[#30e830] text-[#94a3b8] bg-white shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#30e830] p-1 rounded">
            <GiNetworkBars className="text-white text-sm" />
          </div>
          <h4 className="text-black font-extrabold capitalize">learning progress</h4>
        </div>

        <div className="space-y-4">
          {[
            { label: 'phonics', val: '85%', color: 'bg-blue-500', text: 'text-blue-500' },
            { label: 'sentences', val: '42%', color: 'bg-[#f472b6]', text: 'text-[#f472b6]' },
            { label: 'stories', val: '15%', color: 'bg-[#fce279]', text: 'text-[#fce279]' }
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold capitalize">{item.label}</p>
                <p className={`${item.text} font-bold text-sm`}>{item.val}</p>
              </div>
              <div className="bg-[#f8fafc] w-full h-2 rounded-full overflow-hidden">
                <div className={`${item.color} h-full rounded-full`} style={{ width: item.val }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#fffbee] p-3 rounded-2xl mt-6 border border-[#fef3c7]">
          <p className="text-[#b65834] text-xs leading-relaxed font-medium">
            Keep going! You're 3 words away from your daily goal! 🍎
          </p>
        </div>
      </div>

      {/* Grammar Card */}
      <button className="relative w-full bg-[#0f172a] hover:bg-[#1e293b] transition-all rounded-[2rem] p-6 flex items-center justify-between overflow-hidden group shadow-xl">
        <div className="flex flex-col items-start text-left relative z-10">
          <h2 className="text-white text-xl font-bold leading-tight">
            Finish & Start <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Grammar
            </span>
          </h2>
          <p className="mt-2 text-gray-500 text-[10px] font-black uppercase tracking-widest">
            Unlock Next Challenge
          </p>
        </div>
        <div className="relative z-10">
          <svg className="w-12 h-12 text-[#30e830] drop-shadow-[0_0_8px_rgba(48,232,48,0.5)] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l1.5 4.5H18l-3.5 2.5L16 14l-4-3-4 3 1.5-5L6 6.5h4.5L12 2z" />
            <path d="M19 8l1 2.5H23l-2 1.5.5 2.5-2.5-1.5-2.5 1.5.5-2.5-2-1.5h3L19 8z" className="opacity-70" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </div>
  </div>

  {/* Arrows: Mobilda to'liq kenglikda */}
  <div className="fruitArrows flex flex-row gap-4 mt-8 w-full md:w-[65%] lg:w-[60%]">
    <button className="flex-1 bg-white text-[#334155] font-bold py-4 rounded-2xl flex items-center justify-center gap-2 border border-gray-100 shadow-sm hover:bg-gray-50 transition-colors">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
      Previous
    </button>
    
    <button className="flex-1 bg-[#30e830] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-[0_5px_0_rgb(21,128,61)] active:translate-y-1 active:shadow-none transition-all">
      Next Page
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
    </button>
  </div>
</div>
  )
}

export default FruitsPage