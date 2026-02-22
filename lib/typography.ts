const POLISH_SHORT_WORDS = [
  // Single-letter
  "a",
  "i",
  "o",
  "u",
  "w",
  "z",
  // Two-letter
  "do",
  "na",
  "po",
  "za",
  "od",
  "we",
  "ze",
  "to",
  "że",
  "by",
  "co",
  "ni",
  "no",
  "on",
  "ku",
  "ta",
  "tę",
  // Three-letter
  "ale",
  "ani",
  "lub",
  "czy",
  "jak",
  "dla",
  "pod",
  "nad",
  "bez",
  "też",
  "już",
  "nie",
  "tak",
  "gdy",
];

const pattern = POLISH_SHORT_WORDS.join("|");
const orphanRegex = new RegExp(
  `(?<=\\s|^)(${pattern})\\s`,
  "gi"
);

export function fixPolishOrphans(text: string): string {
  // Normalize existing non-breaking spaces to regular spaces first (idempotent)
  const normalized = text.replace(/\u00A0/g, " ");
  return normalized.replace(orphanRegex, "$1\u00A0");
}
