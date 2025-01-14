document.getElementById("toggle-theme").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/dark.webp";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/light.webp";
  }
};
