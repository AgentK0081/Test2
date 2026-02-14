// /js/theme.js

export function setTheme(theme) {
    const root = document.documentElement;

    if (theme === "white") {
        root.style.setProperty('--bg-primary', '#ffffff');
        root.style.setProperty('--accent', '#111111');
    }

    if (theme === "gold") {
        root.style.setProperty('--bg-primary', '#000000');
        root.style.setProperty('--accent', '#d4af37');
    }
}

