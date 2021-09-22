import { diff, isWorld, pow } from "./hw6";

describe("hw-6", () => {
  describe("diff", () => {
    it("get difference number", () => {
      const num1 = Math.floor(Math.random());
      const num2 = Math.floor(Math.random());
      expect(diff(num1, num2)).toBe(num1 > num2 ? num1 - num2 : num2 - num1);
    });
  });

  describe("isWorld", () => {
    it.each([
      ["one", true],
      [" ", false],
      ["one two", false],
    ])("check that srt contains a one world", (str, expected) => {
      expect(isWorld(str)).toBe(expected);
    });
  });

  describe("pow", () => {
    it("check that num is raised to the power of x", () => {
      const num = Math.floor(Math.random());
      const x = Math.floor(Math.random());
      expect(pow(num, x)).toBe(num ** x);
    });
  });
});
