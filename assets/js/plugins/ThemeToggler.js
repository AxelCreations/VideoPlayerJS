class ThemeToggler {
    constructor() {}

    toggleTheme() {
        const BodyEl = document.querySelector("body");
        const buttonToggleTheme = document.querySelector("#toggleTheme");

        if (BodyEl.getAttribute("id") === "dark") {
            BodyEl.setAttribute("id", "");
            buttonToggleTheme.innerHTML = "Dark";
        } else {
            BodyEl.setAttribute("id", "dark");
            buttonToggleTheme.innerHTML = "Burn";
        }
    }
}

export default ThemeToggler;