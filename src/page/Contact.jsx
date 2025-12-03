import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nom || !email || !message) {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }

    if (!email.includes("@")) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    if (message.length < 10) {
      alert("Le message doit contenir au moins 10 caractères.");
      return;
    }

    if (message.length > 500) {
      alert("Le message ne doit pas dépasser 500 caractères.");
      return;
    }

    // if (!nom) {
    //   alert("Le champ nom est obligatoire.");
    //   return;
    // }

    // if (!email) {
    //   alert("Le champ email est obligatoire.");
    //   return;
    // }

    // if (!message) {
    //   alert("Le champ message est obligatoire.");
    //   return;
    // }

    console.log("nom : ", nom);
    console.log("email: ", email);
    console.log("message :", message);

    navigate("/confirmation");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Page Contact</h1>

      <form 
        onSubmit={handleSubmit} 
        style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}
      >
        <label>
          Nom :
          <input value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>

        <label>
          Email :
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Message :
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
