import { validateStr } from "./hw10";

describe("hw-10", () => {
  describe("validateStr", () => {
    it("str is a date", () => {
      jest.spyOn(window, "prompt").mockReturnValue("22.08.2021");
      expect(validateStr()).toBe("str is a date");
    });

    it("str is a email", () => {
      jest.spyOn(window, "prompt").mockReturnValue("test@gmail.com");
      expect(validateStr()).toBe("str is a email");
    });

    it("str is a telephone number", () => {
      jest.spyOn(window, "prompt").mockReturnValue("+7-987-878-55-87");
      expect(validateStr()).toBe("str is a telephone number");
    });
  });
});
