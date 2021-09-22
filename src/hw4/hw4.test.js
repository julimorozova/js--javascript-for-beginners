import {
  addPropAge,
  createObjectCopyWithPropAdmin,
  destructureObj,
} from "./hw4";

describe("hw-4", () => {
  const obj = {
    name: "John",
  };
  describe("addPropAge", () => {
    it("check value to object.age", () => {
      jest.spyOn(window, "prompt").mockReturnValue("26");
      const object = addPropAge(obj);
      expect(object.age).toBe(26);
    });

    it("check, that object contains age property", () => {
      jest.spyOn(window, "prompt").mockReturnValue("26");
      const object = addPropAge(obj);
      expect(object).toHaveProperty("age");
    });
  });

  describe("createObjectCopyWithPropAdmin", () => {
    it("check, that created obj copy", () => {
      const admin = createObjectCopyWithPropAdmin(obj);
      expect(admin.name).toBe(obj.name);
      expect(admin.age).toBe(obj.age);
    });

    it("check, that admin contains role property", () => {
      const admin = createObjectCopyWithPropAdmin(obj);
      expect(admin.role).toBe("admin");
    });
  });

  describe("destructureObj", () => {
    it("check,that property of object was destructured to variables", () => {
      const consoleSpy = jest.spyOn(console, "log");
      const admin = createObjectCopyWithPropAdmin(obj);
      destructureObj(admin);
      expect(consoleSpy).toHaveBeenCalledWith("John", 26, "admin");
    });
  });
});
