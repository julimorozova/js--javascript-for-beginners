import {
  isRectangularTriangle,
  getSquareCircle,
  getRootsOfEquation,
} from "./hw9";

describe("hw-9", () => {
  describe("isRectangularTriangle", () => {
    it("check that a=3, b=4, c= 5 triangle is rectangular", () => {
      expect(isRectangularTriangle(3, 4, 5)).toBe(true);
    });
    it("check that a=3, b=4, c= 5 triangle isn't rectangular", () => {
      expect(isRectangularTriangle(3, 4, 6)).toBe(false);
    });
  });

  describe("getSquareCircle", () => {
    it("check that for r= 4 returned square= 50, l =25", () => {
      const consoleSpy = jest.spyOn(console, "log");
      getSquareCircle(4);
      expect(consoleSpy).toHaveBeenCalledWith(25, 50);
      consoleSpy.mockRestore();
    });
  });
  describe("getRootsOfEquation", () => {
    it("check that for a =1, b=-8, c=7 returned x1 = 7, x2 = 1", () => {
      const consoleSpy = jest.spyOn(console, "log");
      getRootsOfEquation(1, -8, 7);
      expect(consoleSpy).toHaveBeenCalledWith(7, 1);
      consoleSpy.mockRestore();
    });
    it("check that for a =1, b=1, c=1 returned 'there are no roots'", () => {
      const consoleSpy = jest.spyOn(console, "log");
      getRootsOfEquation(1, 1, 1);
      expect(consoleSpy).toHaveBeenCalledWith("there are no roots");
      consoleSpy.mockRestore();
    });
    it("check that for a =3, b=-18, c=27 returned one root x = 3", () => {
      const consoleSpy = jest.spyOn(console, "log");
      getRootsOfEquation(3, -18, 27);
      expect(consoleSpy).toHaveBeenCalledWith(3);
      consoleSpy.mockRestore();
    });
  });
});
