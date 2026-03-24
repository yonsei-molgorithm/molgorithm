export default function MembersPage() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface" id="members">
      <div className="mb-16">
        <span className="font-label text-primary tracking-widest uppercase text-xs mb-4 block">
          04 // THE NODES
        </span>
        <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
          Members
        </h2>
        <p className="mt-4 text-outline text-sm">
          현재 멤버 목록은 준비 중입니다.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-surface-container-low border border-outline-variant/10 relative group"
          >
            <div className="bg-surface-container-high h-full w-full flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-outline-variant">
                person
              </span>
            </div>
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <p className="font-label text-primary-foreground font-bold text-center uppercase tracking-tighter">
                Coming Soon
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
