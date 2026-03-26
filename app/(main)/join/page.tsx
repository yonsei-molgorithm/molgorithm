export default function JoinPage() {
  const formUrl = process.env.NEXT_PUBLIC_JOIN_FORM_URL || "#";

  return (
    <section className="py-32 px-6 md:px-12 bg-primary" id="join">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="text-primary-foreground">
          <span className="font-label tracking-widest uppercase text-xs mb-4 block opacity-80">
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
            <div>
              <h4 className="font-headline text-xl font-bold mb-2">
                선발 방식
              </h4>
              <p className="opacity-80">
                서류 지원으로만 선발합니다. 별도의 코딩 테스트나 면접은 없습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#131313] p-12 shadow-2xl">
          <h3 className="font-headline text-3xl font-bold text-foreground mb-4">
            지원하기
          </h3>
          <p className="text-outline mb-12">
            아래 버튼을 통해 지원서를 작성해 주세요. 간단한 자기소개와 알고리즘
            관심 분야를 적어주시면 됩니다.
          </p>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-6 bg-primary text-primary-foreground font-headline font-bold uppercase tracking-widest hover:bg-white transition-colors text-center"
          >
            지원서 작성
          </a>
          <p className="mt-6 text-xs text-outline text-center">
            모집 기간이 아닌 경우 다음 모집 시 안내드리겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
