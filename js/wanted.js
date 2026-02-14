// /js/wanted.js

import { database } from "./firebase.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

export async function loadWanted() {
    const snapshot = await get(ref(database, "wanted"));
    const data = snapshot.val() || {};

    const grid = document.getElementById("wantedGrid");
    grid.innerHTML = "";

    Object.values(data).forEach(w => {
        const div = document.createElement("div");
        div.textContent = `${w.username} - ${w.threat}`;
        grid.appendChild(div);
    });
}

