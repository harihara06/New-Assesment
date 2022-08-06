export function AddClassToBody() {
  let screen = localStorage.getItem("sidebar");
  let body = document.querySelector("body");
  if (screen === "full") {
    body.classList.add("small_side_bar");
  } else {
    body.classList.remove("small_side_bar");
  }
  return screen;
}
