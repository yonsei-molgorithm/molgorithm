const items = [
  {
    icon: "psychology",
    title: "생각한다",
    description:
      "알고리즘의 핵심은 사고입니다. 매주 정기 세션에서 문제를 분석하고, 최적의 접근법을 설계하며, 논리적 사고력을 키웁니다.",
  },
  {
    icon: "code",
    title: "푼다",
    description:
      "생각을 코드로 구현합니다. 난이도별 트랙에서 문제를 풀고, 서로의 풀이를 리뷰하며 더 나은 해법을 찾아갑니다.",
  },
  {
    icon: "emoji_events",
    title: "경쟁한다",
    description:
      "ICPC, SCPC, UCPC 등 국내외 프로그래밍 대회에 팀을 이루어 참가합니다. 실전 경험을 통해 한계를 시험합니다.",
  },
];

export function AboutSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface-container-low" id="about">
      <div className="mb-24">
        <span className="font-label text-tertiary tracking-widest uppercase text-xs mb-4 block">
          01 // PHILOSOPHY
        </span>
        <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
          생각하고,
          <br />
          풀고, 경쟁한다.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`p-12 hover:bg-surface-container transition-colors duration-500 ${
              i < items.length - 1 ? "border-b md:border-b-0 md:border-r border-outline-variant/20" : ""
            }`}
          >
            <span className="material-symbols-outlined text-primary mb-8 text-4xl">
              {item.icon}
            </span>
            <h3 className="font-headline text-xl font-bold mb-6">
              {item.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
