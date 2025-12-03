import { useState } from "react";

export default function Participants() {
    const [participants] = useState([
        "Dupont Jean",
        "Martin Claire",
        "Durand Paul",
        "Leroy Sophie",
        "Moreau Lucas",
    ]);

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Page Participants</h1>
            <p>Voici la liste des participants inscrits :</p>
            <ul>
                {participants.map((participant, index) => (
                    <li key={index}>{participant}</li>
                ))}
            </ul>
        </div>
    );
}
