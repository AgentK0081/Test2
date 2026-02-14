// /js/divisions.js

import { database } from "./firebase.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

export async function loadDivisions() {
    const snapshot = await get(ref(database, "divisions"));
    const data = snapshot.val() || {};

    const grid = document.getElementById("divisionsGrid");
    grid.innerHTML = "";

    Object.values(data).forEach(d => {
        const div = document.createElement("div");
        div.textContent = d.name;
        grid.appendChild(div);
    });
}

