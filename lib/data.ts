import Papa from "papaparse";
import type { Award, Member } from "@/types/types";

async function fetchCSV<T>(url: string): Promise<{ data: T[]; fetchedAt: Date }> {
  const res = await fetch(url, { next: { revalidate: 60 } });
  const text = await res.text();
  const { data } = Papa.parse<T>(text, { header: true, skipEmptyLines: true });
  return { data, fetchedAt: new Date() };
}

export async function getAwards() {
  const { data, fetchedAt } = await fetchCSV<Award>(process.env.AWARDS_CSV_URL!);
  return { data: data.filter((row) => row.내용?.trim()), fetchedAt };
}

export async function getMembers() {
  const { data, fetchedAt } = await fetchCSV<Member>(process.env.MEMBERS_CSV_URL!);
  return { data: data.filter((row) => row.이름?.trim()), fetchedAt };
}
