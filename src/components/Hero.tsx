
import heroBanner from "@/assets/new logo.png";
import { CounterAnimation } from "./CounterAnimation";

export function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-0 pb-0 bg-gradient-to-b from-[#f8f7f4] to-[#f1f1ef]">
      <img
        src={heroBanner}
        alt="Mahalaxmi Developers Banner"
        className="w-full max-w-4xl h-auto object-cover rounded-b-2xl shadow-2xl"
        style={{ marginTop: 0 }}
      />
      <div className="w-full flex flex-col items-center justify-center mt-2 mb-4">
        <div className="flex items-end gap-2">
          <span className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow animate-pulse">
            <CounterAnimation end={13} duration={1800} suffix="+" />
          </span>
          <span className="text-lg md:text-2xl font-semibold text-yellow-500 mb-1 ml-1 tracking-wide" style={{letterSpacing:'0.04em'}}>Years of Trust</span>
        </div>
      </div>
    </section>
  );
}

