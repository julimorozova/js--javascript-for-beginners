export function addEventListeners() {
  const items = document.querySelector(".items");
  const input = document.querySelector(".input");
  const btn = document.querySelector(".btn");

  input.addEventListener("focus", () => {
    if (input.value.length > 0) {
      btn.removeAttribute("hidden");
    } else {
      btn.setAttribute("hidden", true);
    }
  });

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const text = input.value;
    const el = document.createElement("p");
    el.innerText = text;
    items.append(el);

    el.value = "";
    if (items.childElementCount > 5) {
      items.removeChild(items.firstElementChild);
    }
  });
}
