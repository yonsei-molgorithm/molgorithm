import Papa from "papaparse";
import type { Award } from "@/types/types";

async function fetchCSV<T>(url: string): Promise<T[]> {
  const res = await fetch(url, { next: { revalidate: 60 } });
  const text = await res.text();
  const { data } = Papa.parse<T>(text, { header: true, skipEmptyLines: true });
  return data;
}

export async function getAwards() {
  const data = await fetchCSV<Award>(process.env.AWARDS_CSV_URL!);
  return data.filter((row) => row.내용?.trim());
}
