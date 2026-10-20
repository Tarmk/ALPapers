// Session labels come in a few shapes: "2025 June", "June 2025 (v2)", "2025 November (v3)",
// "Old spec 2013 June (R)", "Specimen 2016". These helpers order them by date.

const MONTHS: Record<string, number> = {
  specimen: 0,
  january: 1,
  february: 2,
  march: 3,
  may: 5,
  june: 6,
  october: 10,
  november: 11,
};

export type SessionParts = { year: number; month: number; variant: number; label: string };

export function parseSession(label: string): SessionParts {
  const lower = label.toLowerCase();
  const year = Number(lower.match(/\b(19|20)\d{2}\b/)?.[0] ?? 0);
  const monthName = Object.keys(MONTHS).find((m) => lower.includes(m));
  const variant = Number(lower.match(/\(v(\d+)\)/)?.[1] ?? 0);
  return { year, month: monthName ? MONTHS[monthName] : 0, variant, label };
}

/** Newest first; variants of one series in ascending order. */
export function compareSessions(a: string, b: string): number {
  const x = parseSession(a);
  const y = parseSession(b);
  return y.year - x.year || y.month - x.month || x.variant - y.variant || a.localeCompare(b);
}

export function sortSessions(labels: Iterable<string>): string[] {
  return [...labels].sort(compareSessions);
}

export function sessionYear(label: string): number {
  return parseSession(label).year;
}

/**
 * "June 2025 (v2)" -> "June v2", "2025 June" -> "June", for use under a year heading.
 * With `abbreviate`, months are cut to three letters ("Nov v2").
 */
export function shortSession(label: string, abbreviate = false): string {
  const { variant } = parseSession(label);
  let month = label.match(/January|February|March|May|June|October|November|Specimen/i)?.[0] ?? label;
  if (abbreviate && month !== label) month = month === "Specimen" ? "Spec" : month.slice(0, 3);
  const extras = [label.match(/\(R\)/) ? "(R)" : "", variant ? `v${variant}` : ""].filter(Boolean).join(" ");
  return extras ? `${month} ${extras}` : month;
}
