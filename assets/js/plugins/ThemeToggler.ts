class ThemeToggler {
    constructor() {}

    public toggleTheme() {
        const BodyEl: HTMLBodyElement = document.querySelector("body");
        const buttonToggleTheme: HTMLBodyElement = document.querySelector("#toggleTheme");

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