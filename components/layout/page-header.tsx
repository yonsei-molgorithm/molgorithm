interface PageHeaderProps {
  label: string;
  title: string;
  labelColor?: "primary" | "tertiary";
  fetchedAt?: Date;
}

export function PageHeader({
  label,
  title,
  labelColor = "primary",
  fetchedAt,
}: PageHeaderProps) {
  const colorClass =
    labelColor === "tertiary" ? "text-tertiary" : "text-primary";

  return (
    <div className="pt-32 pb-12 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
        <div>
          <span
            className={`font-label ${colorClass} tracking-widest uppercase text-xs mb-4 block`}
          >
            {label}
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
            {title}
          </h2>
        </div>
        {fetchedAt && (
          <div className="text-right hidden md:block">
            <p className="font-label text-[10px] tracking-widest text-outline">
              최근 갱신 //{" "}
              {fetchedAt.toLocaleString("ko-KR", {
                timeZone: "Asia/Seoul",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
