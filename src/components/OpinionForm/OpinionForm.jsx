import React, { useState, useEffect } from "react";
import "./OpinionForm.css";
import { getOpiniones, addOpinion, deleteOpinion } from "../../services/opinionService";


const OpinionForm = ({ usuarioId }) => {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [opiniones, setOpiniones] = useState([]);

  const maxChars = 250;

  const cargarOpiniones = async () => {
  const data = await getOpiniones();
  setOpiniones(data);
};

  useEffect(() => {
    cargarOpiniones();
  }, []);

  const enviarOpinion = async () => {
    if (!usuarioId) {
      alert("Debes iniciar sesión para dejar una opinión");
      return;
    }

    if (descripcion.trim().length === 0 || rating === 0) {
      alert("Completa el mensaje y selecciona una calificación");
      return;
    }

    const nuevaOpinion = {
      usuario_id: usuarioId,
      descripcion,
      fecha_creacion: new Date().toISOString().slice(0, 10),  
      calificacion: rating
    };

    try {
      await addOpinion(nuevaOpinion);
      setDescripcion("");
      setRating(0);
      cargarOpiniones();
    } catch (error) {
      console.error(error);
      alert("Error al enviar la opinión");
    }
  };

  return (
    <div className="opinion-container">

      <h2 className="title">CALIFICA Y RECOMIENDA</h2>

      {/* ⭐ Sistema de estrellas */}
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${(hover || rating) >= star ? "filled" : ""}`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
          >
            ★
          </span>
        ))}
      </div>

      {/* 📝 Textarea */}
      <textarea
        maxLength={maxChars}
        className="opinion-textarea"
        placeholder="Escribe tu recomendación aquí... ¡Tu opinión nos importa!"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <div className="char-counter">{descripcion.length} / {maxChars}</div>

      <button className="btn-send" onClick={enviarOpinion}>
        ENVIAR
      </button>

      <h3 className="subtitle">RESEÑAS DE OTROS USUARIOS</h3>

      <div className="opiniones-list">
        {opiniones.map((op) => (
          <div key={op.id} className="opinion-card">
            <div className="op-stars">
              {"★".repeat(op.calificacion)}
              {"☆".repeat(5 - op.calificacion)}
            </div>
            <p className="op-text">{op.descripcion}</p>
            <span className="op-date">{op.fecha_creacion}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default OpinionForm;
