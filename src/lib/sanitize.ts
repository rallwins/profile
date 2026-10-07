const CONTROL = /[\u0000-\u001F\u007F]/g;

export function sanitizeText(input: string, maxLength: number) {
  return input.replace(CONTROL, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

export function isPlausibleEmail(input: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input) && input.length <= 254;
}
