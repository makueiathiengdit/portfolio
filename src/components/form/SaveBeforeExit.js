const beforeUnloadListener = (event) => {
  event.preventDefault();
  return (event.returnValue = "Are you sure you want to exit?");
};

const nameInput = document.querySelector("window");

nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    addEventListener("beforeunload", beforeUnloadListener, { capture: true });
  } else {
    removeEventListener("beforeunload", beforeUnloadListener, {
      capture: true,
    });
  }
});

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  let v = prompt("Save data before to continue later?");
});
