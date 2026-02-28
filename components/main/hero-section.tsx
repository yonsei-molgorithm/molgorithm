import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "500",
});

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[540px] w-full overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Molgorithm hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="text-zinc-100 tracking-[0.7em] text-sm">
          Yonsei Algorithm Circle
        </p>
        <h1
          className={`${orbitron.className} mt-3 tracking-[0.02em] text-white text-7xl`}
        >
          Molgorithm
        </h1>
      </div>
    </section>
  );
}
