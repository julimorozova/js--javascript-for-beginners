import {
  sumElementsArray,
  doubleElementArray,
  getMaxAndMinElementsArray,
} from "./hw5";

describe("hw-5", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe("sumElementsArray", () => {
    it("check output sum of elements array into log", () => {
      sumElementsArray(arr);
      expect(consoleSpy).toHaveBeenCalledWith(45);
    });
  });

  describe("doubleElementArray", () => {
    it("check that elements of array doubles", () => {
      const doubleArr = doubleElementArray(arr);
      expect(doubleArr).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 0]);
    });
  });

  describe("getMaxAndMinElementsArray", () => {
    it("check that find max and min elements of the arrays", () => {
      getMaxAndMinElementsArray(arr);
      expect(consoleSpy).toHaveBeenLastCalledWith(0, 9);
    });
  });
});
