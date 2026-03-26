import { PageHeader } from "@/components/layout/page-header";

const activities = [
  {
    number: "01",
    label: "WEEKLY SESSION",
    title: "정기 세션",
    description:
      "매주 진행되는 알고리즘 세션. 난이도별 트랙으로 나뉘어 문제를 풀고, 풀이를 공유하고 리뷰합니다.",
    details: [
      { label: "주기", value: "매주" },
      { label: "형식", value: "주제별 발표 + 문제풀이 리뷰" },
      { label: "주제", value: "DP, 그래프, 문자열, 수학 등" },
    ],
  },
  {
    number: "02",
    label: "TEAM PRACTICE",
    title: "팀 연습",
    description:
      "ICPC 대회를 대비한 3인 1팀 연습. 실전과 동일한 환경에서 팀 커뮤니케이션과 전략을 다듬습니다.",
    details: [
      { label: "주기", value: "매주 토요일" },
      { label: "구분", value: "Div 1 / Div 2 구분 운영" },
      { label: "셋", value: "Codeforces / AtCoder 기출 활용" },
    ],
  },
  {
    number: "03",
    label: "COMPETITIONS",
    title: "대회 참가",
    description:
      "ICPC, SCPC, UCPC 등 국내외 주요 프로그래밍 대회에 참가하며 실전 경험을 쌓습니다.",
    details: [
      { label: "주요 대회", value: "ICPC, SCPC, UCPC 등" },
    ],
  },
];

export default function ActivitiesPage() {
  return (
    <section className="bg-surface" id="activities">
      <PageHeader
        label="03 // THE CURRICULUM"
        title="Activities"
        labelColor="tertiary"
      />

      {activities.map((item, i) => (
        <div
          key={item.title}
          className={`px-6 md:px-12 py-24 ${
            i % 2 === 0 ? "bg-surface" : "bg-surface-container-low"
          } border-t border-outline-variant/20`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <span className="font-headline text-7xl md:text-8xl font-extrabold text-primary/10 block mb-4">
                {item.number}
              </span>
              <span className="font-label text-[10px] tracking-widest text-primary block mb-2">
                {item.label}
              </span>
              <h3 className="font-headline text-3xl md:text-4xl font-bold">
                {item.title}
              </h3>
            </div>
            <div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
                {item.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {item.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="border-l-2 border-primary/20 pl-6"
                  >
                    <p className="font-label text-[10px] tracking-widest text-outline uppercase mb-2">
                      {detail.label}
                    </p>
                    <p className="text-sm text-foreground font-bold">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
