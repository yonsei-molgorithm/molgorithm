import { HeroSection } from "@/components/main/hero-section";
import { AboutSection } from "@/components/main/about-section";
import { GalleryCarouselSection } from "@/components/main/gallery-carousel-section";
import { getAwards, getMembers } from "@/lib/data";

export default async function MainPage() {
  const [awards, members] = await Promise.all([getAwards(), getMembers()]);

  return (
    <div>
      <HeroSection />
      <AboutSection />

      {/* Awards */}
      <section className="py-32 px-6 md:px-12 bg-surface" id="awards">
        <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div>
            <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">
              02 // VERIFIED STATS
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
              Achievement Log
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="font-label text-xs text-outline tracking-widest">
              DATABASE // 2020–2026
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/30">
                <th className="py-6 font-label text-[10px] tracking-[0.2em] uppercase text-outline">Year</th>
                <th className="py-6 font-label text-[10px] tracking-[0.2em] uppercase text-outline">Event</th>
                <th className="py-6 font-label text-[10px] tracking-[0.2em] uppercase text-outline">Award</th>
                <th className="py-6 font-label text-[10px] tracking-[0.2em] uppercase text-outline">Name</th>
                <th className="py-6 font-label text-[10px] tracking-[0.2em] uppercase text-outline">Team</th>
              </tr>
            </thead>
            <tbody>
              {awards.map((award) => (
                <tr
                  key={award.순번}
                  className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors"
                >
                  <td className="py-8 text-primary font-bold">{award.연도}.{award.월}</td>
                  <td className="py-8">{award.내용}</td>
                  <td className="py-8">{award.상명}</td>
                  <td className="py-8">{award.이름}</td>
                  <td className="py-8 text-outline">{award.팀명}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {awards.length === 0 && (
          <p className="mt-14 text-center text-outline">수상 데이터를 불러오는 중입니다...</p>
        )}
      </section>

      {/* Activities */}
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
          {[
            {
              label: "WEEKLY // 매주",
              title: "정기 세션",
              description: "매주 진행되는 알고리즘 세션. 난이도별 트랙으로 나뉘어 문제를 풀고, 풀이를 공유하고 리뷰합니다.",
              image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
            },
            {
              label: "SATURDAY // 팀연습",
              title: "팀 연습",
              description: "ICPC 대회를 대비한 3인 1팀 연습. 실전과 동일한 환경에서 팀 커뮤니케이션과 전략을 다듬습니다.",
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
            },
            {
              label: "AD-HOC // 수시",
              title: "대회 참가",
              description: "ICPC, SCPC, UCPC 등 국내외 주요 프로그래밍 대회에 참가하며 실전 경험을 쌓습니다.",
              image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600",
            },
          ].map((item) => (
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
                <h3 className="font-headline text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm opacity-70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 bg-surface">
        <GalleryCarouselSection />
      </section>

      {/* Members */}
      <section className="py-32 px-6 md:px-12 bg-surface" id="members">
        <div className="mb-16">
          <span className="font-label text-tertiary tracking-widest uppercase text-xs mb-4 block">
            04 // THE NODES
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
            Members
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {members.map((member) => (
            <div
              key={member.핸들}
              className="flex items-center justify-between py-6 px-4 border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors"
            >
              <span className="font-headline font-bold text-lg">{member.이름}</span>
              <span className="font-label text-xs text-outline tracking-widest">@{member.핸들}</span>
            </div>
          ))}
        </div>
        {members.length === 0 && (
          <p className="mt-14 text-center text-outline">멤버 데이터를 불러오는 중입니다...</p>
        )}
      </section>

      {/* Join */}
      <section className="py-32 px-6 md:px-12 bg-primary" id="join">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="text-primary-foreground">
            <span className="font-label tracking-widest uppercase text-xs mb-4 block">
              05 // RECRUITMENT
            </span>
            <h2 className="font-headline text-6xl md:text-8xl font-black tracking-tighter mb-12">
              Join the
              <br />
              Club.
            </h2>
            <div className="space-y-8 max-w-lg">
              <div className="border-b border-[#003545]/20 pb-8">
                <h4 className="font-headline text-xl font-bold mb-2">지원 자격</h4>
                <p className="opacity-80">
                  연세대학교 학부생 또는 대학원생으로 C++, Python, Java 등 프로그래밍 언어에 기초적인 이해가 있는 분이면 누구나 지원 가능합니다.
                </p>
              </div>
              <div className="border-b border-[#003545]/20 pb-8">
                <h4 className="font-headline text-xl font-bold mb-2">모집 일정</h4>
                <p className="opacity-80">
                  매년 3월과 9월, 학기 초에 모집합니다. 정확한 모집 일정은 추후 공지됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#131313] p-12 shadow-2xl">
            <h3 className="font-headline text-3xl font-bold text-foreground mb-8">가입 절차</h3>
            <div className="space-y-12">
              <div className="flex gap-8">
                <span className="font-headline text-4xl font-extrabold text-primary/20">01</span>
                <div>
                  <h5 className="font-bold text-foreground mb-2">서류 지원</h5>
                  <p className="text-sm text-outline">간단한 자기소개와 알고리즘 관심 분야를 작성해 주세요.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="font-headline text-4xl font-extrabold text-primary/20">02</span>
                <div>
                  <h5 className="font-bold text-foreground mb-2">코딩 테스트</h5>
                  <p className="text-sm text-outline">기초적인 알고리즘 문제 풀이 능력을 확인합니다.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="font-headline text-4xl font-extrabold text-primary/20">03</span>
                <div>
                  <h5 className="font-bold text-foreground mb-2">면접</h5>
                  <p className="text-sm text-outline">학회 활동에 대한 열정과 협업 능력을 확인하는 면접입니다.</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-12 py-6 bg-primary text-primary-foreground font-headline font-bold uppercase tracking-widest hover:bg-white transition-colors">
              지원하기
            </button>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section className="py-48 px-6 md:px-12 bg-surface flex flex-col items-center text-center" id="donate">
        <span className="font-label text-primary tracking-widest uppercase text-xs mb-8">
          06 // SUPPORT
        </span>
        <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-8">
          후원 안내
        </h2>
        <p className="max-w-2xl text-outline text-lg leading-relaxed mb-16">
          모르고리즘의 대회 참가비, 서버 운영비, 스터디 교재비 등을 후원해 주세요. 여러분의 후원이 다음 세대의 알고리즘 인재를 키웁니다.
        </p>
        <div className="bg-surface-container-low p-12 border border-outline-variant/30 max-w-md w-full">
          <div className="mb-8">
            <p className="font-label text-[10px] tracking-widest text-outline uppercase mb-2">입금 계좌</p>
            <p className="font-headline text-2xl font-bold text-primary">추후 안내 예정</p>
          </div>
          <div className="mb-12">
            <p className="font-label text-[10px] tracking-widest text-outline uppercase mb-2">예금주</p>
            <p className="font-headline text-xl font-bold">모르고리즘</p>
          </div>
          <div className="flex flex-col gap-4">
            <button className="bg-foreground text-background py-4 font-bold uppercase tracking-widest text-xs">
              계좌 복사
            </button>
            <button className="border border-outline-variant text-foreground py-4 font-bold uppercase tracking-widest text-xs">
              문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
