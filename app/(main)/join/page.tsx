export default function JoinPage() {
  return (
    <section className="py-32 px-6 md:px-12 bg-primary" id="join">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="text-primary-foreground">
          <span className="font-label tracking-widest uppercase text-xs mb-4 block">
            05 // RECRUITMENT
          </span>
          <h2 className="font-headline text-6xl md:text-8xl font-black tracking-tighter mb-12">
            Join the
            <br />
            Monolith.
          </h2>
          <div className="space-y-8 max-w-lg">
            <div className="border-b border-[#003545]/20 pb-8">
              <h4 className="font-headline text-xl font-bold mb-2">
                지원 자격
              </h4>
              <p className="opacity-80">
                연세대학교 학부생 또는 대학원생으로 C++, Python, Java 등
                프로그래밍 언어에 기초적인 이해가 있는 분이면 누구나 지원
                가능합니다.
              </p>
            </div>
            <div className="border-b border-[#003545]/20 pb-8">
              <h4 className="font-headline text-xl font-bold mb-2">
                모집 일정
              </h4>
              <p className="opacity-80">
                매년 3월과 9월, 학기 초에 모집합니다. 정확한 모집 일정은 추후
                공지됩니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#131313] p-12 shadow-2xl">
          <h3 className="font-headline text-3xl font-bold text-foreground mb-8">
            가입 절차
          </h3>
          <div className="space-y-12">
            <div className="flex gap-8">
              <span className="font-headline text-4xl font-extrabold text-primary/20">
                01
              </span>
              <div>
                <h5 className="font-bold text-foreground mb-2">서류 지원</h5>
                <p className="text-sm text-outline">
                  간단한 자기소개와 알고리즘 관심 분야를 작성해 주세요.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <span className="font-headline text-4xl font-extrabold text-primary/20">
                02
              </span>
              <div>
                <h5 className="font-bold text-foreground mb-2">코딩 테스트</h5>
                <p className="text-sm text-outline">
                  기초적인 알고리즘 문제 풀이 능력을 확인합니다.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <span className="font-headline text-4xl font-extrabold text-primary/20">
                03
              </span>
              <div>
                <h5 className="font-bold text-foreground mb-2">면접</h5>
                <p className="text-sm text-outline">
                  학회 활동에 대한 열정과 협업 능력을 확인하는 면접입니다.
                </p>
              </div>
            </div>
          </div>
          <button className="w-full mt-12 py-6 bg-primary text-primary-foreground font-headline font-bold uppercase tracking-widest hover:bg-white transition-colors">
            지원하기
          </button>
        </div>
      </div>
    </section>
  );
}
