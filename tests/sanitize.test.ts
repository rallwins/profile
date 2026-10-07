import { describe, expect, it } from "vitest";
import { isPlausibleEmail, sanitizeText } from "../src/lib/sanitize";

describe("sanitizeText", () => {
  it("strips control characters and extra space", () => {
    expect(sanitizeText("Ada\nLovelace\u0000", 40)).toBe("Ada Lovelace");
  });

  it("limits length", () => {
    expect(sanitizeText("abcdefghij", 4)).toBe("abcd");
  });

  it("accepts a normal email and rejects a blank one", () => {
    expect(isPlausibleEmail("a@example.com")).toBe(true);
    expect(isPlausibleEmail("not-an-email")).toBe(false);
  });
});
