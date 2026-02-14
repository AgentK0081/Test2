// /js/app.js

import { initTabs } from "./ui.js";
import { loadDivisions } from "./divisions.js";
import { loadPlayers } from "./players.js";
import { loadWanted } from "./wanted.js";
import { setTheme } from "./theme.js";

window.addEventListener("DOMContentLoaded", async () => {

    setTheme("white"); // Change to "gold" anytime

    initTabs();

    await loadDivisions();
    await loadPlayers();
    await loadWanted();
});

