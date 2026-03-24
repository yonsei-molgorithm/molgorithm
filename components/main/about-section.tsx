const items = [
  {
    icon: "terminal",
    title: "문제 해결 중심",
    description:
      "모르고리즘은 단순히 코드를 작성하는 곳이 아닙니다. 코드는 풀이를 구현하는 매개체일 뿐, 우리는 '문제 해결'에 집중하며 동료들과 매주 대회에 참여하고 솔루션을 공유하며 성장합니다.",
  },
  {
    icon: "group_work",
    title: "함께 성장",
    description:
      "매주 진행되는 정기 세션과 팀 연습을 통해 알고리즘 실력을 쌓고, 서로의 풀이를 리뷰하며 더 나은 접근법을 발견합니다. 혼자가 아닌 동료와 함께하는 성장을 추구합니다.",
  },
  {
    icon: "hub",
    title: "Alumni Network",
    description:
      "모르고리즘 출신 선배님들과 현 학회원들이 한자리에 모여 네트워킹하는 행사입니다. 알고리즘, 학교 생활, 보안, 금융 등 다양한 분야의 경험담을 나누며 시야를 넓힙니다.",
  },
];

export function AboutSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface-container-low" id="about">
      <div className="mb-24">
        <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">
          01 // PHILOSOPHY
        </span>
        <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
          생각하고,
          <br />
          풀고, 성장하다.
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
