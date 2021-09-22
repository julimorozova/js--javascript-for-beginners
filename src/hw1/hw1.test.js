import { sumAndMultiply, getStringsLength, sumDigitsInput } from "./hw1";

describe("hw-1", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe("sumAndMultiply", () => {
    it("console.log has been called", () => {
      sumAndMultiply(1, 3);
      expect(consoleSpy).toHaveBeenCalled();
    });

    it("console.log takes the correct argument", () => {
      sumAndMultiply(2, 5);
      expect(consoleSpy).toHaveBeenLastCalledWith(7, 10);
    });
  });

  describe("getStringsLength", () => {
    it("console.log has been called", () => {
      getStringsLength("aa", "bbb");
      expect(consoleSpy).toHaveBeenCalled();
    });

    it.each([
      ["aaa", "one", 6],
      ["", "one", 3],
      ["", "", 0],
      ["1", "22", 3],
    ])("console.log takes the correct argument", (str1, str2, expected) => {
      getStringsLength(str1, str2);
      expect(consoleSpy).toHaveBeenLastCalledWith(expected);
    });
  });

  describe("sumDigitsInput", () => {
    it("console.log outputs sum of digits of the input number", () => {
      jest.spyOn(window, "prompt").mockReturnValue("111");
      sumDigitsInput();
      expect(consoleSpy).toHaveBeenCalledWith(3);
    });
  });
});
