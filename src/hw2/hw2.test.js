import { maxNumber, getMonth } from "./hw2";

describe("hw-2", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe("maxNumber", () => {
    it.each([
      [1, 2, 2],
      [10, 0, 10],
      [-1, -2, -1],
      [-2, 2, 2],
    ])("output maximum from two numbers", (num1, num2, expected) => {
      maxNumber(num1, num2);
      expect(consoleSpy).toHaveBeenCalledWith(expected);
    });

    it("console.log has been called", () => {
      maxNumber(1, 3);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });

  describe("getMonth", () => {
    it("console.log has been called", () => {
      jest.spyOn(window, "prompt").mockReturnValue("1");
      getMonth();
      expect(consoleSpy).toHaveBeenCalled();
    });

    it.each([
      ["5", "May"],
      ["1", "January"],
      ["12", "December"],
    ])("get months", (input, expected) => {
      jest.spyOn(window, "prompt").mockReturnValue(input);
      getMonth();
      expect(consoleSpy).toHaveBeenCalledWith(expected);
    });

    it.each([
      ["13", "Invalid input"],
      ["0", "Invalid input"],
      ["-1", "Invalid input"],
    ])("invalid input", (input, expected) => {
      jest.spyOn(window, "prompt").mockReturnValue(input);
      getMonth();
      expect(consoleSpy).toHaveBeenCalledWith(expected);
    });
  });
});
