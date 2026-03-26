import { getAwards } from "@/lib/data";
import { PageHeader } from "@/components/layout/page-header";

export default async function AwardsPage() {
  const { data: awards, fetchedAt } = await getAwards();

  const grouped = awards.reduce<Record<string, typeof awards>>((acc, award) => {
    const year = award.연도;
    if (!acc[year]) acc[year] = [];
    acc[year].push(award);
    return acc;
  }, {});

  const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="bg-surface" id="awards">
      <PageHeader
        label="02 // VERIFIED STATS"
        title="Awards"
        labelColor="tertiary"
        fetchedAt={fetchedAt}
      />
      <div className="px-6 md:px-12 pb-16">
        {sortedYears.map((year) => (
          <div key={year} className="mb-8">
            <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-primary/10 mb-2">
              {year}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse table-fixed">
                <colgroup>
                  <col className="w-[25%]" />
                  <col className="w-[15%]" />
                  <col className="w-[30%]" />
                  <col className="w-[30%]" />
                </colgroup>
                <thead>
                  <tr className="border-b border-outline-variant/30">
                    <th className="py-2 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                      Event
                    </th>
                    <th className="py-2 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                      Award
                    </th>
                    <th className="py-2 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                      Name
                    </th>
                    <th className="py-2 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                      Team
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {grouped[year]
                    .sort((a, b) => Number(b.월) - Number(a.월))
                    .map((award) => (
                    <tr
                      key={award.순번}
                      className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors"
                    >
                      <td className="py-2">{award.내용}</td>
                      <td className="py-2">{award.상명}</td>
                      <td className="py-2">{award.이름}</td>
                      <td className="py-2 text-outline">{award.팀명}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {awards.length === 0 && (
          <p className="mt-14 text-center text-outline">
            수상 데이터를 불러오는 중입니다...
          </p>
        )}
      </div>
    </section>
  );
}
