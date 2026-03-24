export default function DonatePage() {
  return (
    <section
      className="py-48 px-6 md:px-12 bg-surface flex flex-col items-center text-center"
      id="donate"
    >
      <span className="font-label text-primary tracking-widest uppercase text-xs mb-8">
        06 // SUPPORT
      </span>
      <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-8">
        후원 안내
      </h2>
      <p className="max-w-2xl text-outline text-lg leading-relaxed mb-16">
        모르고리즘의 대회 참가비, 서버 운영비, 스터디 교재비 등을 후원해 주세요.
        여러분의 후원이 다음 세대의 알고리즘 인재를 키웁니다.
      </p>
      <div className="bg-surface-container-low p-12 border border-outline-variant/30 max-w-md w-full">
        <div className="mb-8">
          <p className="font-label text-[10px] tracking-widest text-outline uppercase mb-2">
            입금 계좌
          </p>
          <p className="font-headline text-2xl font-bold text-primary">
            추후 안내 예정
          </p>
        </div>
        <div className="mb-12">
          <p className="font-label text-[10px] tracking-widest text-outline uppercase mb-2">
            예금주
          </p>
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
  );
}
