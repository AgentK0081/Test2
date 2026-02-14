// /js/players.js

import { database } from "./firebase.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

export async function loadPlayers() {
    const snapshot = await get(ref(database, "players"));
    const data = snapshot.val() || {};

    const table = document.getElementById("playersTable");
    table.innerHTML = "";

    const players = Object.values(data);

    players.forEach(p => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${p.callsign}</td>
            <td>${p.username}</td>
            <td>${p.rank}</td>
            <td>${p.division}</td>
        `;
        table.appendChild(row);
    });

    document.getElementById("memberCount").textContent = players.length;
}

