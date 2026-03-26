export function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 relative overflow-hidden"
      id="hero"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent" />
      </div>
      <div className="z-10">
        <span className="font-label text-tertiary tracking-[0.4em] uppercase text-xs mb-8 block">
          EST. 2000 / YONSEI ALGORITHM CLUB
        </span>
        <h1 className="font-headline text-[12vw] font-extrabold leading-[0.85] tracking-tighter text-foreground mb-12">
          MOLGORITHM
        </h1>
        <div className="flex flex-col md:flex-row md:items-end gap-12">
          <p className="max-w-xl font-headline text-xl md:text-2xl font-light leading-relaxed opacity-60">
            연세대학교 알고리즘 학회 모르고리즘.
            <br />
            우리는 생각하고, 문제를 풀고, 경쟁합니다.
          </p>
          <div className="flex-1 flex justify-end">
            <span className="material-symbols-outlined text-8xl text-primary/10 select-none">
              architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
