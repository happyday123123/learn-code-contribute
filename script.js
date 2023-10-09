const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
const lightIcon = document.getElementById("lightIcon");
const darkIcon = document.getElementById("darkIcon");

if (darkThemeMq.matches) {
    setTheme("dark");
} else {
    setTheme("light");
}

function setTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
    if (theme === "dark") {
        lightIcon.style.display = "inline";
        darkIcon.style.display = "none";
    } else {
        lightIcon.style.display = "none";
        darkIcon.style.display = "inline";
    }
}

darkThemeMq.addEventListener("change", e => {
    if (e.matches) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
});