import { getMembers } from "@/lib/data";
import { PageHeader } from "@/components/layout/page-header";

export default async function MembersPage() {
  const { data: members, fetchedAt } = await getMembers();

  return (
    <section className="bg-surface" id="members">
      <PageHeader
        label="04 // THE NODES"
        title="Members"
        labelColor="tertiary"
        fetchedAt={fetchedAt}
      />
      <div className="px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {members.map((member) => (
            <div
              key={member.핸들}
              className="flex items-center justify-between py-6 px-4 border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors"
            >
              <span className="font-headline font-bold text-lg">
                {member.이름}
              </span>
              <a
                href={`https://www.acmicpc.net/user/${member.핸들}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-xs text-outline tracking-widest hover:text-primary transition-colors"
              >
                @{member.핸들}
              </a>
            </div>
          ))}
        </div>

        {members.length === 0 && (
          <p className="mt-14 text-center text-outline">
            멤버 데이터를 불러오는 중입니다...
          </p>
        )}
      </div>
    </section>
  );
}
