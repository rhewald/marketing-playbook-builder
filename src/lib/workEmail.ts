// Rejects personal and disposable email addresses so leads are work emails.
// Shared by the lead form (instant feedback) and the /api/lead route (enforcement).

// Providers whose domain varies by country (gmail.co.uk, yahoo.fr, hotmail.de, ...).
const FREE_PREFIXES = [
  "gmail", "googlemail", "yahoo", "ymail", "rocketmail", "hotmail", "outlook", "live", "msn",
  "aol", "aim", "gmx", "web", "yandex", "mail", "inbox", "zoho", "protonmail", "proton", "tutanota",
  "tuta", "libero", "virgilio", "wanadoo", "laposte", "sfr", "t-online", "freenet",
  "seznam", "wp", "o2", "interia", "onet", "rediffmail", "qq", "163", "126", "sina", "sohu", "naver",
  "daum", "hanmail", "bol", "uol", "terra", "ig", "sapo", "rambler", "bk", "list", "ukr", "abv",
];

// Exact domains: US ISPs, Apple, and common disposable inboxes.
const FREE_DOMAINS = new Set([
  "icloud.com", "me.com", "mac.com", "pm.me", "proton.me", "hey.com", "fastmail.com", "fastmail.fm",
  "mail.com", "email.com", "usa.com", "post.com", "hushmail.com", "lycos.com", "excite.com", "juno.com",
  "netzero.net", "earthlink.net", "comcast.net", "verizon.net", "att.net", "sbcglobal.net", "bellsouth.net",
  "cox.net", "charter.net", "optonline.net", "frontier.com", "frontiernet.net", "windstream.net",
  "centurylink.net", "orange.fr", "free.fr", "roadrunner.com", "rr.com", "twc.com", "spectrum.net", "q.com", "shaw.ca", "rogers.com",
  "sympatico.ca", "telus.net", "btinternet.com", "sky.com", "talktalk.net", "virginmedia.com", "ntlworld.com",
  "bigpond.com", "optusnet.com.au", "xtra.co.nz", "mailinator.com", "guerrillamail.com", "sharklasers.com",
  "10minutemail.com", "tempmail.com", "temp-mail.org", "yopmail.com", "trashmail.com", "getnada.com",
  "dispostable.com", "maildrop.cc", "throwawaymail.com", "fakeinbox.com", "mintemail.com", "mohmal.com",
  "emailondeck.com", "burnermail.io", "duck.com", "simplelogin.com", "anonaddy.com", "33mail.com",
]);

export function emailDomain(email: string): string {
  return (email.split("@")[1] || "").trim().toLowerCase();
}

/** True for personal or disposable addresses (gmail.com, yahoo.co.uk, icloud.com, mailinator.com...). */
export function isPersonalEmail(email: string): boolean {
  const domain = emailDomain(email);
  if (!domain) return false;
  if (FREE_DOMAINS.has(domain)) return true;
  // Also catch subdomains of listed domains (e.g. alias.duck.com).
  for (const d of FREE_DOMAINS) if (domain.endsWith("." + d)) return true;
  // Prefix match only for a bare provider domain: gmail.com, yahoo.fr, yahoo.co.uk,
  // hotmail.com.br. Company subdomains like mail.acme.com don't match.
  const [label, ...rest] = domain.split(".");
  if (!FREE_PREFIXES.includes(label)) return false;
  if (rest.length === 1) return /^[a-z]{2,3}$/.test(rest[0]);
  if (rest.length === 2) return /^(co|com|net|org|ne|or)$/.test(rest[0]) && /^[a-z]{2}$/.test(rest[1]);
  return false;
}

export const WORK_EMAIL_MESSAGE = "Please use your work email. Personal addresses like Gmail, Yahoo or iCloud aren't accepted.";
