import {
  outputSumToConsole,
  outputMultiplyTableToConsole,
  outputArithmeticMeanOfOddNumbers,
} from "./hw3";

describe("hw-3", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe("outputSumToConsole", () => {
    it("console.log has been called", () => {
      outputSumToConsole();
      expect(consoleSpy).toHaveBeenCalled();
    });

    it("output sum number to console", () => {
      outputSumToConsole();
      expect(consoleSpy).toHaveBeenCalledWith(3825);
    });
  });

  describe("outputMultiplyTableToConsole", () => {
    it("Multiply Table for 7", () => {
      outputMultiplyTableToConsole(7);
      expect(consoleSpy).toHaveBeenCalledWith("7 * 1 = 7");
      expect(consoleSpy).toHaveBeenCalledWith("7 * 2 = 14");
      expect(consoleSpy).toHaveBeenCalledWith("7 * 3 = 21");
      expect(consoleSpy).toHaveBeenCalledWith("7 * 4 = 28");
      expect(consoleSpy).toHaveBeenCalledWith("7 * 5 = 35");
      expect(consoleSpy).toHaveBeenCalledWith("7 * 6 = 42");
      expect(consoleSpy).toHaveBeenCalledWith("7 * 7 = 49");
      expect(consoleSpy).toHaveBeenCalledWith("7 * 8 = 56");
      expect(consoleSpy).toHaveBeenCalledWith("7 * 9 = 63");
      expect(consoleSpy).toHaveBeenCalledWith("7 * 10 = 70");
    });
  });

  describe("outputArithmeticMeanOfOddNumbers", () => {
    it("output N for num = 11", () => {
      jest.spyOn(window, "prompt").mockReturnValue(11);
      outputArithmeticMeanOfOddNumbers();
      expect(consoleSpy).toHaveBeenCalledWith(6);
    });
  });
});
