import { getAwards } from "@/lib/data";

export default async function AwardsPage() {
  const awards = await getAwards();

  return (
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
              <th className="py-6 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                Year
              </th>
              <th className="py-6 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                Event
              </th>
              <th className="py-6 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                Award
              </th>
              <th className="py-6 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                Name
              </th>
              <th className="py-6 font-label text-[10px] tracking-[0.2em] uppercase text-outline">
                Team
              </th>
            </tr>
          </thead>
          <tbody>
            {awards.map((award) => (
              <tr
                key={award.순번}
                className="border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors"
              >
                <td className="py-8 text-primary font-bold">
                  {award.연도}.{award.월}
                </td>
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
        <p className="mt-14 text-center text-outline">
          수상 데이터를 불러오는 중입니다...
        </p>
      )}
    </section>
  );
}
