// Date helpers (UTC, date-only) and the US retail calendar.

export function d(y: number, m: number, day: number): Date {
  return new Date(Date.UTC(y, m - 1, day));
}
export function iso(x: Date): string {
  return x.toISOString().slice(0, 10);
}
export function addDays(x: Date, n: number): Date {
  return new Date(x.getTime() + n * 86400000);
}
export function parse(s: string): Date {
  const [y, m, dd] = s.split("-").map(Number);
  return d(y, m, dd);
}
const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export function monthName(m: number) {
  return MONTH_FULL[m - 1];
}
export function monthShort(m: number) {
  return MON[m - 1];
}
export function fmt(s: string): string {
  const x = parse(s);
  return `${MON[x.getUTCMonth()]} ${x.getUTCDate()}`;
}
export function fmtRange(a: string, b: string): string {
  if (a === b) return fmt(a);
  const x = parse(a), y = parse(b);
  if (x.getUTCMonth() === y.getUTCMonth()) return `${MON[x.getUTCMonth()]} ${x.getUTCDate()} – ${y.getUTCDate()}`;
  return `${fmt(a)} – ${fmt(b)}`;
}
function nthWeekday(y: number, m: number, weekday: number, n: number): Date {
  const first = d(y, m, 1);
  const offset = (weekday - first.getUTCDay() + 7) % 7;
  return d(y, m, 1 + offset + (n - 1) * 7);
}
function lastWeekday(y: number, m: number, weekday: number): Date {
  const last = d(y, m + 1, 0);
  const offset = (last.getUTCDay() - weekday + 7) % 7;
  return addDays(last, -offset);
}
function easter(y: number): Date {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, dd = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - dd - g + 15) % 30, i = Math.floor(c / 4), k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31), day = ((h + l - 7 * m + 114) % 31) + 1;
  return d(y, month, day);
}

export interface CalendarMoment {
  key: string;
  name: string;
  start: Date;
  end: Date;
  major: boolean;
  job: string;
  kind: "sale" | "gifting" | "repeat" | "traffic" | "clear" | "launch";
}

/** Retail moments for one calendar year (US). */
export function momentsForYear(y: number, giftable: boolean): CalendarMoment[] {
  const thanksgiving = nthWeekday(y, 11, 4, 4);
  const bf = addDays(thanksgiving, 1);
  const cm = addDays(bf, 3);
  const mothers = nthWeekday(y, 5, 0, 2);
  const fathers = nthWeekday(y, 6, 0, 3);
  const memorial = lastWeekday(y, 5, 1);
  const labor = nthWeekday(y, 9, 1, 1);
  const ez = easter(y);
  const list: CalendarMoment[] = [
    { key: "newyear", name: "New Year reset", start: d(y, 1, 1), end: d(y, 1, 15), major: false, job: "Repeat buyers", kind: "repeat" },
    { key: "valentines", name: "Valentine's Day", start: d(y, 2, 1), end: d(y, 2, 14), major: giftable, job: "Gifting", kind: "gifting" },
    { key: "easter", name: "Easter & spring", start: addDays(ez, -14), end: ez, major: false, job: "Traffic, list growth", kind: "traffic" },
    { key: "mothers", name: "Mother's Day", start: addDays(mothers, -19), end: mothers, major: true, job: "Gifting, new customers", kind: "gifting" },
    { key: "memorial", name: "Memorial Day sale", start: addDays(memorial, -4), end: memorial, major: false, job: "Clear stock", kind: "clear" },
    { key: "fathers", name: "Father's Day", start: addDays(fathers, -19), end: fathers, major: giftable, job: "Gifting", kind: "gifting" },
    { key: "summer", name: "Summer sale", start: d(y, 7, 1), end: d(y, 7, 15), major: false, job: "Clear stock", kind: "clear" },
    { key: "labor", name: "Labor Day weekend", start: addDays(labor, -3), end: labor, major: false, job: "Traffic", kind: "sale" },
    { key: "halloween", name: "Halloween & holiday preview", start: d(y, 10, 1), end: d(y, 10, 31), major: false, job: "Traffic, list growth", kind: "traffic" },
    { key: "bfcm", name: "Black Friday – Cyber Monday", start: bf, end: addDays(cm, 1), major: true, job: "New customers", kind: "sale" },
    { key: "holiday", name: "Holiday gifting", start: addDays(cm, 2), end: d(y, 12, 17), major: giftable, job: "Margin", kind: "gifting" },
  ];
  return list;
}
