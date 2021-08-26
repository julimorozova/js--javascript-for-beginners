import { addEventListeners } from "./hw7";

function addHTML() {
  return `<div class="wrapper">
            <div class="items">
            </div>
            <input type="text" class="input">
            <button class="btn" hidden>Click me</button>
        </div>`;
}

describe("hw-7", () => {
  describe("addEventListeners", () => {
    document.body.innerHTML = addHTML();
    addEventListeners();

    const items = document.querySelector(".items");
    const input = document.querySelector(".input");
    const btn = document.querySelector(".btn");

    it("check that btn doesn't contain the attribute hidden", () => {
      input.value = "Hello";
      input.dispatchEvent(new Event("focus"));
      expect(btn.hasAttribute("hidden")).toBe(false);
    });

    it("check that btn contains the attribute hidden", () => {
      input.value = "";
      input.dispatchEvent(new Event("focus"));
      expect(btn.hasAttribute("hidden")).toBe(true);
    });

    it.each([
      ["p-1", 1],
      ["p-2", 2],
      ["p-3", 3],
      ["p-4", 4],
      ["p-5", 5],
      ["p-6", 5],
    ])(
      "check that only 5 elements added to container div.items",
      (value, expected) => {
        input.value = value;
        input.dispatchEvent(new Event("focus"));
        btn.click();
        expect(items.childElementCount).toBe(expected);
      }
    );
  });
});
