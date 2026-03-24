const activities = [
  {
    label: "WEEKLY // 매주",
    title: "정기 세션",
    description:
      "매주 진행되는 알고리즘 세션. 난이도별 트랙으로 나뉘어 문제를 풀고, 풀이를 공유하고 리뷰합니다.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910auj7?w=600",
  },
  {
    label: "SATURDAY // 팀연습",
    title: "팀 연습",
    description:
      "ICPC 대회를 대비한 3인 1팀 연습. 실전과 동일한 환경에서 팀 커뮤니케이션과 전략을 다듬습니다.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
  },
  {
    label: "AD-HOC // 수시",
    title: "대회 참가",
    description:
      "ICPC, SCPC, UCPC 등 국내외 주요 프로그래밍 대회에 참가하며 실전 경험을 쌓습니다.",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600",
  },
];

export default function ActivitiesPage() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#e2e2e2] text-[#131313]" id="activities">
      <div className="mb-24">
        <span className="font-label text-[#006782] tracking-widest uppercase text-xs mb-4 block">
          03 // THE CURRICULUM
        </span>
        <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
          활동 소개
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {activities.map((item) => (
          <div
            key={item.title}
            className="group relative aspect-[3/4] overflow-hidden bg-[#131313] flex flex-col justify-end p-8"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="relative z-10 text-[#e2e2e2]">
              <span className="font-label text-[10px] tracking-widest text-[#9de2ff] mb-2 block">
                {item.label}
              </span>
              <h3 className="font-headline text-3xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-sm opacity-70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
