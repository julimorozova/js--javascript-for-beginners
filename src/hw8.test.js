import { getMinutes, getUserYounger, getWeekDay } from "./hw8";

describe("hw-8", () => {
  describe("getWeekDay", () => {
    it.each([
      ["22.08.2021", "Sunday"],
      ["09.08.2021", "Monday"],
      ["10.08.2021", "Tuesday"],
      ["11.08.2021", "Wednesday"],
      ["12.08.2021", "Thursday"],
      ["13.08.2021", "Friday"],
      ["14.08.2021", "Saturday"],
    ])("check that week days return right", (date, expected) => {
      jest.spyOn(window, "prompt").mockReturnValue(date);
      expect(getWeekDay()).toBe(expected);
    });
  });

  describe("getMinutes", () => {
    it("check minutes to console.log", () => {
      const consoleSpy = jest.spyOn(console, "log");
      getMinutes();
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe("getUserYounger", () => {
    it("check that User1 is younger", () => {
      expect(getUserYounger("23.07.1994", "13.03.1991")).toBe(
        "User1 is younger"
      );
    });

    it("check that User2 is younger", () => {
      expect(getUserYounger("12.11.1980", "15.03.1996")).toBe(
        "User2 is younger"
      );
    });
  });
});
