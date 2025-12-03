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
    <div className="py-4">
      <h1 className="h3 mb-4">Contact</h1>

      <form
        onSubmit={handleSubmit}
        className="row g-3" style={{ maxWidth: "420px" }}
      >
        <div className="col-12">
          <label htmlFor="nom" className="form-label">
            Nom
          </label>
          <input
            id="nom"
            className="form-control"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
