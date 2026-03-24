import { getMembers } from "@/lib/data";

export default async function MembersPage() {
  const members = await getMembers();

  return (
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
            <span className="font-headline font-bold text-lg">
              {member.이름}
            </span>
            <span className="font-label text-xs text-outline tracking-widest">
              @{member.핸들}
            </span>
          </div>
        ))}
      </div>

      {members.length === 0 && (
        <p className="mt-14 text-center text-outline">
          멤버 데이터를 불러오는 중입니다...
        </p>
      )}
    </section>
  );
}
